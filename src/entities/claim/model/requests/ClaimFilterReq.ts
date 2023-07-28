import type {IPagenation} from "shared/api/utils";

export interface ClaimFilterReq extends IPagenation {
    "status": string|null,
    "assignee": string|null,
    "globalCompanyId": string|null,
    "clientInn": string|null,
    "clientKpp": string|null,
    "category": string|null,
    "channel": string|null,
    "initiatorType": string|null,
    "isFirstLine": Boolean,
    "claimType": string|null,
    "claimTheme": string|null,
    "priority": string|null,
    "clientOrgn": string|null,
    pause_till_till:string|null,
    pause_till_from:string|null
}
