import axios, { InternalAxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";

const API = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:5000`
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
        const { accessToken } = parseCookies();
        console.log(accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
})

/*axios.create({
    withCredentials: true
});

axios.defaults.baseURL = `http://localhost:5000`;

axios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const { accessToken, refreshToken } = parseCookies();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});*/

export default API;