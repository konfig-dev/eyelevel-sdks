/*
GroundX API

Ground Your RAG Apps in Fact not Fiction

The version of the OpenAPI document: 1.0.0
Contact: support@groundx.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { DocumentType } from './document-type';

/**
 * 
 * @export
 * @interface DocumentRemoteUploadRequestDocumentsInner
 */
export interface DocumentRemoteUploadRequestDocumentsInner {
    /**
     * 
     * @type {number}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'bucketId': number;
    /**
     * 
     * @type {string}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'sourceUrl': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'callbackData'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'callbackUrl'?: string;
    /**
     * 
     * @type {object}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'metadata'?: object;
    /**
     * 
     * @type {DocumentType}
     * @memberof DocumentRemoteUploadRequestDocumentsInner
     */
    'type'?: DocumentType;
}
