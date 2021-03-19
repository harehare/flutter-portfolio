import os
from typing import Optional
import contentful

client = contentful.Client(os.environ.get("SPACE_ID"),
                           os.environ.get("ACCESS_TOKEN"))


def to_entries(entry):
    return {
        "id": entry.id,
        "title": entry.title,
        "body": entry.body,
        "published_at": entry.published_at.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "is_markdown": entry.is_markdown,
    }


def items(skip: Optional[int] = 0, limit: Optional[int] = 30):
    blog_items = [
        item for item in client.entries({
            "skip": skip,
            "limit": limit
        })
    ]

    return list(map(to_entries, blog_items))
