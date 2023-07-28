
import type { CRClient, Claim, ClaimReq } from "entities/claim";




export const claimtoReq = (claim: Claim): CreateReq => {
    const crClient: CRClient = {
      globalCompanyId: claim.client?.globalCompanyId ? Number(claim.client.globalCompanyId) : 0,
      plCompanyId: claim.client?.id.toString() || '',
      inn: claim.client?.inn || '',
      kpp: claim.client?.kpp || '',
      ogrn: claim.client?.ogrn || '',
      fullName: claim.client?.fullName || '',
      shortName: claim.client?.shortName || '',
    };
  
    const nonEmptyProps: Partial<CreateReq> = {
      category: claim.category,
      channel: claim.channel,
      initiatorType: claim.initiatorType,
      isFirstLine: claim.isFirstLine,
      claimType: claim.claimType,
      claimTheme: claim.claimTheme,
      description: claim.description,
      serviceCount: claim.serviceCount,
      priority: claim.priority,
      priority_reason: claim.priorityReason,
      assignee: claim.assignee,
      comment: claim.comment,
      client: crClient,
      documents: claim.documents,
    };
  
    const claimReq: CreateReq = Object.fromEntries(
      Object.entries(nonEmptyProps).filter(([_, value]) => value !== undefined && value !== null)
    ) as unknown as CreateReq;
    return claimReq;
}