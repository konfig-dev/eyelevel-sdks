# coding: utf-8

"""
    GroundX APIs

    RAG Made Simple, Secure and Hallucination Free

    The version of the OpenAPI document: 1.3.26
    Contact: support@eyelevel.ai
    Created by: https://www.eyelevel.ai/
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from groundx.type.group_detail import GroupDetail

class RequiredGroupResponse(TypedDict):
    group: GroupDetail

class OptionalGroupResponse(TypedDict, total=False):
    pass

class GroupResponse(RequiredGroupResponse, OptionalGroupResponse):
    pass
