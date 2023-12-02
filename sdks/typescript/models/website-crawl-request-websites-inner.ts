/*
GroundX API

Ground Your RAG Apps in Fact not Fiction

The version of the OpenAPI document: 1.0.0
Contact: support@groundx.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WebsiteCrawlRequestWebsitesInner
 */
export interface WebsiteCrawlRequestWebsitesInner {
    /**
     * the bucketId of the bucket which this website will be uploaded to.
     * @type {number}
     * @memberof WebsiteCrawlRequestWebsitesInner
     */
    'bucketId': number;
    /**
     * The maximum number of pages to crawl
     * @type {number}
     * @memberof WebsiteCrawlRequestWebsitesInner
     */
    'cap'?: number;
    /**
     * The maximum depth of linked pages to follow from the sourceUrl
     * @type {number}
     * @memberof WebsiteCrawlRequestWebsitesInner
     */
    'depth'?: number;
    /**
     * Custom metadata which can be used to influence GroundX\'s search functionality. This data can be used to further hone GroundX search.
     * @type {object}
     * @memberof WebsiteCrawlRequestWebsitesInner
     */
    'searchData'?: object;
    /**
     * The URL from which the crawl is initiated.
     * @type {string}
     * @memberof WebsiteCrawlRequestWebsitesInner
     */
    'sourceUrl': string;
}

