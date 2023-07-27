import axios from 'axios'
import type { Claim, UpdateReq,
    CloseReq, ForwardReq,
    PauseReq, CreateReq } from '../../../entities/claim';
import type { References } from '../../../entities/reference'
//@ts-ignore
import api from "../index";
import type {ClaimFilterReq} from "../../../entities/claim/model/requests/ClaimFilterReq";

const useCommonApi = () => {

}
//requests
export const useReferenceService = () => {
    const getReferences = async () => {
        return (await api.get<References>('/references'));
    };
    return {getReferences}

}
export const useClaimService = () => {
    const getClaims = async (claimFilterReq:ClaimFilterReq) : Promise<Claim[]> => {
        return (await api.get<Claim[]>('/claims', {params : claimFilterReq})).data;
    };

    const getClaimById = async (id: number) :Promise<Claim>=> {
        return (await api.get<Claim>(`/claims/${id}`)).data;
    };

    const createClaim = async (claim: CreateReq) :Promise<Claim>=> {
        return await api.post('/claims', claim);
    };

    const editClaim = async (claim: CreateReq, id: number) :Promise<Claim>=> {
        return await api.post(`/claims/${id}`, claim)
    };

    const updateClaim = async (req: UpdateReq, id: number) => {
        return await api.patch(`/claims/${id}/update`, req)
    };

    const assign = async (id: number) => {
        return await api.patch(`/claims/${id}/assign`)
    };

    const forward = async (req: ForwardReq, id: number) => {
        return await api.patch(`/claims/${id}/forward`, {...req})
    };

    const close = async (req: CloseReq, id: number) => {
        return await api.patch(`/claims/${id}/close`, {...req})
    };
    const pause = async (req: PauseReq, id: number) => {
        return await api.patch(`/claims/${id}/pause`, {...req})
    };
    const reassign = async (req: PauseReq, id: number) => {
        return await api.patch(`/claims/${id}/pause`, {...req})
    };
    return {pause,close,createClaim,forward,assign, updateClaim, editClaim,  getClaimById,getClaims}


}