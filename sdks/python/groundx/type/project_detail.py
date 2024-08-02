# coding: utf-8

"""
    EyeLevel's GroundX APIs

    RAG Made Simple, Secure and Hallucination Free

    The version of the OpenAPI document: 1.3.26
    Contact: support@eyelevel.ai
    Created by: https://www.eyelevel.ai/
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from groundx.type.bucket_detail import BucketDetail

class RequiredProjectDetail(TypedDict):
    projectId: int


class OptionalProjectDetail(TypedDict, total=False):
    # The content buckets associated with the project
    buckets: typing.List[BucketDetail]

    # The data time when the project was created, in RFC3339 format
    created: datetime

    # The number of files contained in the content buckets associated with the project
    fileCount: int

    # The total file size of files contained in the content buckets associated with the project
    fileSize: str

    name: str

    # The data time when the project was last updated, in RFC3339 format
    updated: datetime

class ProjectDetail(RequiredProjectDetail, OptionalProjectDetail):
    pass
