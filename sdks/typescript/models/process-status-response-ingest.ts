/*
EyeLevel\'s GroundX APIs

RAG Made Simple, Secure and Hallucination Free

The version of the OpenAPI document: 1.3.26
Contact: support@eyelevel.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProcessStatusResponseIngestProgress } from './process-status-response-ingest-progress';
import { ProcessingStatus } from './processing-status';

/**
 * 
 * @export
 * @interface ProcessStatusResponseIngest
 */
export interface ProcessStatusResponseIngest {
    /**
     * 
     * @type {string}
     * @memberof ProcessStatusResponseIngest
     */
    'processId': string;
    /**
     * 
     * @type {ProcessStatusResponseIngestProgress}
     * @memberof ProcessStatusResponseIngest
     */
    'progress'?: ProcessStatusResponseIngestProgress;
    /**
     * 
     * @type {ProcessingStatus}
     * @memberof ProcessStatusResponseIngest
     */
    'status': ProcessingStatus;
    /**
     * 
     * @type {string}
     * @memberof ProcessStatusResponseIngest
     */
    'statusMessage'?: string;
}

