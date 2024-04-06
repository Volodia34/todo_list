import axios from 'axios';
import useToken from "./Token";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const {getToken, setToken} = useToken()
        const token = getToken();
        if (token) {
            config.headers.set('Authorization', token)
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;