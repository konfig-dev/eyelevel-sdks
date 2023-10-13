/* tslint:disable */
/* eslint-disable */
/*
GroundX API

Ground Your RAG Apps in Fact not Fiction

The version of the OpenAPI document: 1.0.0
Contact: support@groundx.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DocumentDeleteResponse } from '../models';
// @ts-ignore
import { DocumentListResponse } from '../models';
// @ts-ignore
import { DocumentLocalUploadRequestInner } from '../models';
// @ts-ignore
import { DocumentLocalUploadRequestInnerMetadata } from '../models';
// @ts-ignore
import { DocumentLookupResponse } from '../models';
// @ts-ignore
import { DocumentRemoteUploadRequest } from '../models';
// @ts-ignore
import { DocumentRemoteUploadRequestDocumentsInner } from '../models';
// @ts-ignore
import { DocumentResponse } from '../models';
// @ts-ignore
import { DocumentResponseDocument } from '../models';
// @ts-ignore
import { DocumentType } from '../models';
// @ts-ignore
import { IngestResponse } from '../models';
// @ts-ignore
import { IngestResponseIngest } from '../models';
// @ts-ignore
import { ProcessStatusResponse } from '../models';
// @ts-ignore
import { ProcessStatusResponseIngest } from '../models';
// @ts-ignore
import { ProcessStatusResponseIngestProgress } from '../models';
// @ts-ignore
import { ProcessStatusResponseIngestProgressComplete } from '../models';
// @ts-ignore
import { ProcessingStatus } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DocumentsApi - axios parameter creator
 * @export
 */
export const DocumentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a document
         * @param {string} documentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (documentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('delete', 'documentId', documentId)
            const localVarPath = `/v1/ingest/document/{documentId}`
                .replace(`{${"documentId"}}`, encodeURIComponent(String(documentId !== undefined ? documentId : `-documentId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Look up an existing document by its ID
         * @param {string} documentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (documentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('get', 'documentId', documentId)
            const localVarPath = `/v1/ingest/document/{documentId}`
                .replace(`{${"documentId"}}`, encodeURIComponent(String(documentId !== undefined ? documentId : `-documentId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Look up the processing status of documents for a given processId
         * @param {string} processId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProcessingStatusById: async (processId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'processId' is not null or undefined
            assertParamExists('getProcessingStatusById', 'processId', processId)
            const localVarPath = `/v1/ingest/{processId}`
                .replace(`{${"processId"}}`, encodeURIComponent(String(processId !== undefined ? processId : `-processId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Look up all existing documents
         * @param {number} [n] 
         * @param {string} [nextToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (n?: number, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/ingest/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })
            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Look up existing documents by processId, bucketId, or projectId
         * @param {number} id 
         * @param {number} [n] 
         * @param {string} [nextToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lookup: async (id: number, n?: number, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('lookup', 'id', id)
            const localVarPath = `/v1/ingest/documents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })
            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload local documents to GroundX
         * @param {Array<DocumentLocalUploadRequestInner>} [documentLocalUploadRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadLocal: async (documentLocalUploadRequestInner?: Array<DocumentLocalUploadRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/ingest/documents/local`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Node.js
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // Browser
                        localVarFormParams.append(name, data as any, data.name);
                    }
                } else {
                    if (isPrimitiveType) {
                        localVarFormParams.append(name, data as any);
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)]), { type: "application/json", filename: "data.json" })
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            if (documentLocalUploadRequestInner) {
                for (const element of documentLocalUploadRequestInner) {
                    await addFormParam('blob', element.blob, true, true)
                    await addFormParam('metadata', element.metadata, false, false)
                }
            }

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: documentLocalUploadRequestInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload hosted documents to GroundX
         * @param {DocumentRemoteUploadRequest} [documentRemoteUploadRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadRemote: async (documentRemoteUploadRequest?: DocumentRemoteUploadRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/ingest/documents/remote`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: documentRemoteUploadRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(documentRemoteUploadRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentsApi - functional programming interface
 * @export
 */
export const DocumentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete a document
         * @param {DocumentsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: DocumentsApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentDeleteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.documentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Look up an existing document by its ID
         * @param {DocumentsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: DocumentsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.documentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Look up the processing status of documents for a given processId
         * @param {DocumentsApiGetProcessingStatusByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProcessingStatusById(requestParameters: DocumentsApiGetProcessingStatusByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProcessStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProcessingStatusById(requestParameters.processId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Look up all existing documents
         * @param {DocumentsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: DocumentsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.n, requestParameters.nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Look up existing documents by processId, bucketId, or projectId
         * @param {DocumentsApiLookupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lookup(requestParameters: DocumentsApiLookupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentLookupResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookup(requestParameters.id, requestParameters.n, requestParameters.nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload local documents to GroundX
         * @param {DocumentsApiUploadLocalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadLocal(requestParameters: DocumentsApiUploadLocalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadLocal(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload hosted documents to GroundX
         * @param {DocumentsApiUploadRemoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadRemote(requestParameters: DocumentsApiUploadRemoteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadRemote(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentsApi - factory interface
 * @export
 */
export const DocumentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete a document
         * @param {DocumentsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: DocumentsApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<DocumentDeleteResponse> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Look up an existing document by its ID
         * @param {DocumentsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: DocumentsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<DocumentResponse> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Look up the processing status of documents for a given processId
         * @param {DocumentsApiGetProcessingStatusByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProcessingStatusById(requestParameters: DocumentsApiGetProcessingStatusByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ProcessStatusResponse> {
            return localVarFp.getProcessingStatusById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Look up all existing documents
         * @param {DocumentsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: DocumentsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<DocumentListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Look up existing documents by processId, bucketId, or projectId
         * @param {DocumentsApiLookupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lookup(requestParameters: DocumentsApiLookupRequest, options?: AxiosRequestConfig): AxiosPromise<DocumentLookupResponse> {
            return localVarFp.lookup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload local documents to GroundX
         * @param {DocumentsApiUploadLocalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadLocal(requestParameters: DocumentsApiUploadLocalRequest, options?: AxiosRequestConfig): AxiosPromise<IngestResponse> {
            return localVarFp.uploadLocal(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload hosted documents to GroundX
         * @param {DocumentsApiUploadRemoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadRemote(requestParameters: DocumentsApiUploadRemoteRequest, options?: AxiosRequestConfig): AxiosPromise<IngestResponse> {
            return localVarFp.uploadRemote(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for delete operation in DocumentsApi.
 * @export
 * @interface DocumentsApiDeleteRequest
 */
export type DocumentsApiDeleteRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DocumentsApiDelete
    */
    readonly documentId: string
    
}

/**
 * Request parameters for get operation in DocumentsApi.
 * @export
 * @interface DocumentsApiGetRequest
 */
export type DocumentsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DocumentsApiGet
    */
    readonly documentId: string
    
}

/**
 * Request parameters for getProcessingStatusById operation in DocumentsApi.
 * @export
 * @interface DocumentsApiGetProcessingStatusByIdRequest
 */
export type DocumentsApiGetProcessingStatusByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DocumentsApiGetProcessingStatusById
    */
    readonly processId: string
    
}

/**
 * Request parameters for list operation in DocumentsApi.
 * @export
 * @interface DocumentsApiListRequest
 */
export type DocumentsApiListRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof DocumentsApiList
    */
    readonly n?: number
    
    /**
    * 
    * @type {string}
    * @memberof DocumentsApiList
    */
    readonly nextToken?: string
    
}

/**
 * Request parameters for lookup operation in DocumentsApi.
 * @export
 * @interface DocumentsApiLookupRequest
 */
export type DocumentsApiLookupRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof DocumentsApiLookup
    */
    readonly id: number
    
    /**
    * 
    * @type {number}
    * @memberof DocumentsApiLookup
    */
    readonly n?: number
    
    /**
    * 
    * @type {string}
    * @memberof DocumentsApiLookup
    */
    readonly nextToken?: string
    
}

/**
 * Request parameters for uploadLocal operation in DocumentsApi.
 * @export
 * @interface DocumentsApiUploadLocalRequest
 */
export type DocumentsApiUploadLocalRequest = Array<DocumentLocalUploadRequestInner>

/**
 * Request parameters for uploadRemote operation in DocumentsApi.
 * @export
 * @interface DocumentsApiUploadRemoteRequest
 */
export type DocumentsApiUploadRemoteRequest = {
    
} & DocumentRemoteUploadRequest

/**
 * DocumentsApiGenerated - object-oriented interface
 * @export
 * @class DocumentsApiGenerated
 * @extends {BaseAPI}
 */
export class DocumentsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Delete a document
     * @param {DocumentsApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public delete(requestParameters: DocumentsApiDeleteRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Look up an existing document by its ID
     * @param {DocumentsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public get(requestParameters: DocumentsApiGetRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Look up the processing status of documents for a given processId
     * @param {DocumentsApiGetProcessingStatusByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public getProcessingStatusById(requestParameters: DocumentsApiGetProcessingStatusByIdRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).getProcessingStatusById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Look up all existing documents
     * @param {DocumentsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public list(requestParameters: DocumentsApiListRequest = {}, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Look up existing documents by processId, bucketId, or projectId
     * @param {DocumentsApiLookupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public lookup(requestParameters: DocumentsApiLookupRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).lookup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload local documents to GroundX
     * @param {DocumentsApiUploadLocalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public uploadLocal(requestParameters: DocumentsApiUploadLocalRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).uploadLocal(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload hosted documents to GroundX
     * @param {DocumentsApiUploadRemoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiGenerated
     */
    public uploadRemote(requestParameters: DocumentsApiUploadRemoteRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).uploadRemote(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
