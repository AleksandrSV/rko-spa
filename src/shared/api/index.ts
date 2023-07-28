import axios from "axios";
//@ts-ignore
import {updateToken, useKeycloak} from "lib/vue-keycloak";


const api = axios.create({
    //@ts-ignore
    baseURL: import.meta.env.VITE_RKO_SPA_REAL_API_URL,
});

api.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error.response.status === 404) {
            return {status: error.response.status};
        }
        return Promise.reject(error.response);
    });
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

const bearerAuth = (token: string | null) => {
    return `Bearer ${token}`
}
export default api;