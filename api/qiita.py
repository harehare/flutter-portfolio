import os
from typing import Optional
import requests
from datetime import datetime

qiita_access_token = os.environ.get('QIITA_ACCESS_TOKEN')


def to_entries(item):
    return {
        "id": item["id"],
        "title": item["title"],
        "body": item["body"],
        "published_at": item["created_at"],
        "is_markdown": True,
        "url": item["url"]
    }


def items(skip: Optional[int] = 0, limit: Optional[int] = 30):
    res = requests.get(
        f'https://qiita.com/api/v2/authenticated_user/items?page={int(skip / limit) if int(skip / limit) > 0 else 1}&per_page={limit}',
        headers={
            'content-type': 'application/json; charser=UTF-8',
            "Authorization": f"Bearer {qiita_access_token}"
        })
    if res.status_code != 200:
        return []

    return list(map(to_entries, res.json()))
