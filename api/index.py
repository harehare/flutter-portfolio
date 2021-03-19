import os
from typing import Optional
import datetime

import graphene
import contentful
from fastapi import FastAPI
from starlette.graphql import GraphQLApp
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from api import qiita, blog

client = contentful.Client(os.environ.get("SPACE_ID"),
                           os.environ.get("ACCESS_TOKEN"))


class Entry(graphene.Interface):
    id = graphene.String(required=True)
    title = graphene.String(required=True)
    body = graphene.String()
    published_at = graphene.String()
    is_markdown = graphene.Boolean()

    @classmethod
    def resolve_type(cls, instance, info):
        if isinstance(instance, dict) and "url" in instance:
            return ExternalEntry
        return BlogEntry


class BlogEntry(graphene.ObjectType):
    class Meta:
        interfaces = (Entry, )


class ExternalEntry(graphene.ObjectType):
    class Meta:
        interfaces = (Entry, )

    url = graphene.String()


class Query(graphene.ObjectType):
    entries = graphene.List(
        Entry,
        skip=graphene.Int(required=False, default_value=0),
        limit=graphene.Int(required=False, default_value=30),
    )
    entry = graphene.Field(Entry, entry_id=graphene.String())

    def resolve_entry(self, info, entry_id):
        return client.entry(entry_id)

    def resolve_entries(self,
                        info,
                        skip: Optional[int] = 0,
                        limit: Optional[int] = 30):
        return sorted(blog.items(skip, limit) + qiita.items(skip, limit),
                      key=lambda x: x.get("published_at"),
                      reverse=True)


app = FastAPI()
app.add_middleware(GZipMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_route(
    "/api",
    GraphQLApp(
        schema=graphene.Schema(query=Query, types=[BlogEntry, ExternalEntry])))


@app.options("/api/cors")
def api_cors():
    return {"status": "ok"}
