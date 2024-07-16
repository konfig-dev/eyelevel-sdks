/*
GroundX API

Ground Your RAG Apps in Fact not Fiction

The version of the OpenAPI document: 1.0.0
Contact: support@groundx.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DocumentType } from './document-type';

/**
 * 
 * @export
 * @interface DocumentLocalIngestRequestInnerMetadata
 */
export interface DocumentLocalIngestRequestInnerMetadata {
    /**
     * the bucketId of the bucket which this local file will be ingested to.
     * @type {number}
     * @memberof DocumentLocalIngestRequestInnerMetadata
     */
    'bucketId': number;
    /**
     * The name of the file being ingested
     * @type {string}
     * @memberof DocumentLocalIngestRequestInnerMetadata
     */
    'fileName': string;
    /**
     * The type of document (one of the seven currently supported file types)
     * @type {DocumentType}
     * @memberof DocumentLocalIngestRequestInnerMetadata
     */
    'fileType': DocumentType;
    /**
     * Custom metadata which can be used to influence GroundX\'s search functionality. This data can be used to further hone GroundX search.
     * @type {object}
     * @memberof DocumentLocalIngestRequestInnerMetadata
     */
    'searchData'?: object;
}
