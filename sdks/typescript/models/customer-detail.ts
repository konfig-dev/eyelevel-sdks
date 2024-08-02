/*
EyeLevel\'s GroundX APIs

RAG Made Simple, Secure and Hallucination Free

The version of the OpenAPI document: 1.3.26
Contact: support@eyelevel.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SubscriptionDetail } from './subscription-detail';

/**
 * Account information for the user
 * @export
 * @interface CustomerDetail
 */
export interface CustomerDetail {
    /**
     * Email associated with the account
     * @type {string}
     * @memberof CustomerDetail
     */
    'email'?: string;
    /**
     * Given name associated with the account, if known
     * @type {string}
     * @memberof CustomerDetail
     */
    'first'?: string;
    /**
     * Family name associated with the account, if known
     * @type {string}
     * @memberof CustomerDetail
     */
    'last'?: string;
    /**
     * 
     * @type {SubscriptionDetail}
     * @memberof CustomerDetail
     */
    'subscription'?: SubscriptionDetail;
}

