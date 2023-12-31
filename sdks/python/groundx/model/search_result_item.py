# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Created by: https://www.groundx.ai/
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


class SearchResultItem(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        
        class properties:
            bucketId = schemas.IntSchema
            documentId = schemas.UUIDSchema
            fileName = schemas.StrSchema
            score = schemas.NumberSchema
            searchData = schemas.DictSchema
            sourceUrl = schemas.StrSchema
            suggestedText = schemas.StrSchema
            text = schemas.StrSchema
            __annotations__ = {
                "bucketId": bucketId,
                "documentId": documentId,
                "fileName": fileName,
                "score": score,
                "searchData": searchData,
                "sourceUrl": sourceUrl,
                "suggestedText": suggestedText,
                "text": text,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["bucketId"]) -> MetaOapg.properties.bucketId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["documentId"]) -> MetaOapg.properties.documentId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["fileName"]) -> MetaOapg.properties.fileName: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["score"]) -> MetaOapg.properties.score: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["searchData"]) -> MetaOapg.properties.searchData: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["sourceUrl"]) -> MetaOapg.properties.sourceUrl: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["suggestedText"]) -> MetaOapg.properties.suggestedText: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["text"]) -> MetaOapg.properties.text: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["bucketId", "documentId", "fileName", "score", "searchData", "sourceUrl", "suggestedText", "text", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["bucketId"]) -> typing.Union[MetaOapg.properties.bucketId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["documentId"]) -> typing.Union[MetaOapg.properties.documentId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["fileName"]) -> typing.Union[MetaOapg.properties.fileName, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["score"]) -> typing.Union[MetaOapg.properties.score, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["searchData"]) -> typing.Union[MetaOapg.properties.searchData, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["sourceUrl"]) -> typing.Union[MetaOapg.properties.sourceUrl, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["suggestedText"]) -> typing.Union[MetaOapg.properties.suggestedText, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["text"]) -> typing.Union[MetaOapg.properties.text, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["bucketId", "documentId", "fileName", "score", "searchData", "sourceUrl", "suggestedText", "text", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        bucketId: typing.Union[MetaOapg.properties.bucketId, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        documentId: typing.Union[MetaOapg.properties.documentId, str, uuid.UUID, schemas.Unset] = schemas.unset,
        fileName: typing.Union[MetaOapg.properties.fileName, str, schemas.Unset] = schemas.unset,
        score: typing.Union[MetaOapg.properties.score, decimal.Decimal, int, float, schemas.Unset] = schemas.unset,
        searchData: typing.Union[MetaOapg.properties.searchData, dict, frozendict.frozendict, schemas.Unset] = schemas.unset,
        sourceUrl: typing.Union[MetaOapg.properties.sourceUrl, str, schemas.Unset] = schemas.unset,
        suggestedText: typing.Union[MetaOapg.properties.suggestedText, str, schemas.Unset] = schemas.unset,
        text: typing.Union[MetaOapg.properties.text, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SearchResultItem':
        return super().__new__(
            cls,
            *args,
            bucketId=bucketId,
            documentId=documentId,
            fileName=fileName,
            score=score,
            searchData=searchData,
            sourceUrl=sourceUrl,
            suggestedText=suggestedText,
            text=text,
            _configuration=_configuration,
            **kwargs,
        )
