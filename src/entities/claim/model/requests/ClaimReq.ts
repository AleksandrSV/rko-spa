export interface ClaimReq {
    category: string
    channel?: string
    initiatorType?: string
    isFirstLine?: boolean
    claimType?: string
    claimTheme?: string
    description?: string
    serviceCount?: number
    priority: string
    priority_reason?: string
    assignee?: string
    comment?: string
    client?: CRClient
    documents?: CRDocument[]
}
export interface PostClaimReq {
    category: string
    channel: string
    initiatorType: string
    isFirstLine: boolean
    claimType: string
    claimTheme: string
    description: string
    serviceCount: number
    priority: string
    priority_reason: string
    assignee: string
    comment: string
    client: CRClient
    documents: CRDocument[]
}
export interface CRClient {
    globalCompanyId: number|null//из доки следует, что пока null
    plCompanyId: string|null//null
    inn: string
    kpp: string
    ogrn: string
    fullName: string
    shortName: string
}

export interface CRDocument {
    id: string
    name: string
    size: number
}
