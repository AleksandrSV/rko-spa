import axios from 'axios'

import type { Claim, UpdateReq,
             CloseReq, ForwardReq, 
             PauseReq, CreateReq } from 'entities/claim/model';
import type { References } from 'entities/reference'
// import {updateToken, useKeycloak} from "shared/lib/vue-keycloak/src/vue3-keycloak.js";

const api = axios.create({
    //@ts-ignore
    baseURL: import.meta.env.VITE_RKO_SPA_API_URL 
})

api.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error?.response?.status === 404) {
            return {status: error.response.status};
        }
        return Promise.reject(error.response);
    });
/*кейклок медленный и кривой, пока отключил
api.interceptors.request.use(
    async (config:any) => {
        const {keycloak, hasFailed, isPending} = useKeycloak();
        let token = null;
        try {
            token = await updateToken(0);
        } catch (error:any) {
            error && console.error(error?.response.status||error);

            if (hasFailed && !isPending) {
                keycloak.logout();
            }
        }
        config.headers = {
            Authorization: bearerAuth(token), 
        };
        return config;
    }, error => {
        console.error("axios bearer requst error")
        console.log(error?.response)
        Promise.reject(error);
    });
function bearerAuth(token: string | null) {
    return `Bearer ${token}`
}
*/
//requests
export const getReferences = async () => {
    return (await api.get<References>('/references')).data
}

export const getClaims = async () => {
    return (await api.get<Claim[]>('/claim')).data
}

export const getClaimById = async (id: number) => {
    return (await api.get<Claim>(`/claim/${id}`)).data
}

export const createClaim = async (claim: CreateReq) => {
    return await api.post('/claim', {...claim})
}

export const editClaim = async (claim: CreateReq, id: number) => {
    return await api.post(`/claim/${id}`, {...claim})
}

export const updateClaim = async (req: UpdateReq, id: number) => {
    return await api.patch(`/claim/${id}/update`, {...req})
}

export const assign = async (id: number) => {
    return await api.patch(`/claims/${id}/assign`)
}

export const forward = async (req: ForwardReq, id: number) => {
    return await api.patch(`/claims/${id}/forward`, req)
}

export const close = async (req: CloseReq, id: number) => {
    return await api.patch(`/claims/${id}/close`, req)
}

export const pause = async (req: PauseReq, id: number) => {
    return await api.patch(`/claims/${id}/pause`, req)
}