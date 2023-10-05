# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Generated by: https://konfigthis.com
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from groundx import schemas  # noqa: F401


class DocumentRemoteUploadRequest(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        
        class properties:
        
            @staticmethod
            def type() -> typing.Type['DocumentType']:
                return DocumentType
        
            @staticmethod
            def documents() -> typing.Type['DocumentRemoteUploadRequestDocuments']:
                return DocumentRemoteUploadRequestDocuments
            __annotations__ = {
                "type": type,
                "documents": documents,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["type"]) -> 'DocumentType': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["documents"]) -> 'DocumentRemoteUploadRequestDocuments': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["type", "documents", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["type"]) -> typing.Union['DocumentType', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["documents"]) -> typing.Union['DocumentRemoteUploadRequestDocuments', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["type", "documents", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        type: typing.Union['DocumentType', schemas.Unset] = schemas.unset,
        documents: typing.Union['DocumentRemoteUploadRequestDocuments', schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'DocumentRemoteUploadRequest':
        return super().__new__(
            cls,
            *args,
            type=type,
            documents=documents,
            _configuration=_configuration,
            **kwargs,
        )

from groundx.model.document_remote_upload_request_documents import DocumentRemoteUploadRequestDocuments
from groundx.model.document_type import DocumentType
