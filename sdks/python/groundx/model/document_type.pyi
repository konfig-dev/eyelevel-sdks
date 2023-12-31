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


class DocumentType(
    schemas.EnumBase,
    schemas.StrSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    The type of document (one of the seven currently supported file types)
    """
    
    @schemas.classproperty
    def TXT(cls):
        return cls("txt")
    
    @schemas.classproperty
    def DOCX(cls):
        return cls("docx")
    
    @schemas.classproperty
    def PPTX(cls):
        return cls("pptx")
    
    @schemas.classproperty
    def XLSX(cls):
        return cls("xlsx")
    
    @schemas.classproperty
    def PDF(cls):
        return cls("pdf")
    
    @schemas.classproperty
    def PNG(cls):
        return cls("png")
    
    @schemas.classproperty
    def JPG(cls):
        return cls("jpg")
    
    @schemas.classproperty
    def CSV(cls):
        return cls("csv")
    
    @schemas.classproperty
    def TSV(cls):
        return cls("tsv")
