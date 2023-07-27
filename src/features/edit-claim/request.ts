import type { CRClient, Claim, ClaimReq } from "entities/claim";
import type { Client } from "entities/client/model";


export const claimtoReq = (claim: Claim): ClaimReq => {
    const crClient: CRClient = {
      globalCompanyId: claim.client?.globalCompanyId ? Number(claim.client.globalCompanyId) : 0,
      plCompanyId: claim.client?.id.toString() || '',
      inn: claim.client?.inn || '',
      kpp: claim.client?.kpp || '',
      ogrn: claim.client?.ogrn || '',
      fullName: claim.client?.fullName || '',
      shortName: claim.client?.shortName || '',
    };
  
    const nonEmptyProps: Partial<ClaimReq> = {
      category: claim.category,
      channel: claim.channel,
      initiatorType: claim.initiator_type,
      isFirstLine: claim.is_first_line,
      claimType: claim.claim_type,
      claimTheme: claim.claim_theme,
      description: claim.description,
      serviceCount: claim.service_count,
      priority: claim.priority,
      priority_reason: claim.priority_reason,
      assignee: claim.assignee,
      comment: claim.comment,
      client: crClient,
      documents: claim.documents,
    };
  
    const claimReq: ClaimReq = Object.fromEntries(
      Object.entries(nonEmptyProps).filter(([_, value]) => value !== undefined && value !== null)
    ) as unknown as ClaimReq;
    return claimReq;
}