/*
EyeLevel\'s GroundX APIs

RAG Made Simple, Secure and Hallucination Free

The version of the OpenAPI document: 1.3.26
Contact: support@eyelevel.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface BucketDetail
 */
export interface BucketDetail {
    /**
     * 
     * @type {number}
     * @memberof BucketDetail
     */
    'bucketId': number;
    /**
     * The data time when the bucket was created, in RFC3339 format
     * @type {string}
     * @memberof BucketDetail
     */
    'created'?: string;
    /**
     * The number of files contained in the content bucket
     * @type {number}
     * @memberof BucketDetail
     */
    'fileCount'?: number;
    /**
     * The total file size of files contained in the content bucket
     * @type {string}
     * @memberof BucketDetail
     */
    'fileSize'?: string;
    /**
     * 
     * @type {string}
     * @memberof BucketDetail
     */
    'name'?: string;
    /**
     * The data time when the bucket was last updated, in RFC3339 format
     * @type {string}
     * @memberof BucketDetail
     */
    'updated'?: string;
}

