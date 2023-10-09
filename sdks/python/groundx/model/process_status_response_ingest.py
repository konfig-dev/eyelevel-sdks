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


class ProcessStatusResponseIngest(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "processId",
            "status",
        }
        
        class properties:
            processId = schemas.StrSchema
        
            @staticmethod
            def status() -> typing.Type['ProcessingStatus']:
                return ProcessingStatus
        
            @staticmethod
            def progress() -> typing.Type['ProcessStatusResponseIngestProgress']:
                return ProcessStatusResponseIngestProgress
            statusMessage = schemas.StrSchema
            __annotations__ = {
                "processId": processId,
                "status": status,
                "progress": progress,
                "statusMessage": statusMessage,
            }
    
    processId: MetaOapg.properties.processId
    status: 'ProcessingStatus'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["processId"]) -> MetaOapg.properties.processId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["status"]) -> 'ProcessingStatus': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["progress"]) -> 'ProcessStatusResponseIngestProgress': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["statusMessage"]) -> MetaOapg.properties.statusMessage: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["processId", "status", "progress", "statusMessage", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["processId"]) -> MetaOapg.properties.processId: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> 'ProcessingStatus': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["progress"]) -> typing.Union['ProcessStatusResponseIngestProgress', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["statusMessage"]) -> typing.Union[MetaOapg.properties.statusMessage, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["processId", "status", "progress", "statusMessage", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        processId: typing.Union[MetaOapg.properties.processId, str, ],
        status: 'ProcessingStatus',
        progress: typing.Union['ProcessStatusResponseIngestProgress', schemas.Unset] = schemas.unset,
        statusMessage: typing.Union[MetaOapg.properties.statusMessage, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ProcessStatusResponseIngest':
        return super().__new__(
            cls,
            *args,
            processId=processId,
            status=status,
            progress=progress,
            statusMessage=statusMessage,
            _configuration=_configuration,
            **kwargs,
        )

from groundx.model.document_response import DocumentResponse
from groundx.model.document_response_document import DocumentResponseDocument
from groundx.model.process_status_response_ingest_progress import ProcessStatusResponseIngestProgress
from groundx.model.process_status_response_ingest_progress_complete import ProcessStatusResponseIngestProgressComplete
from groundx.model.process_status_response_ingest_progress_errors import ProcessStatusResponseIngestProgressErrors
from groundx.model.process_status_response_ingest_progress_processing import ProcessStatusResponseIngestProgressProcessing
from groundx.model.processing_status import ProcessingStatus
