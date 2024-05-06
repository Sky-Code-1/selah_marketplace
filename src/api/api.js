import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosParams = {
    baseURL: 'http://localhost:8080'
}

const axiosInstance = axios.create(axiosParams)

const api = {
    get: (url, config = {}) => {
        return axiosInstance.get(url, config)
    },
    delete: (url, config = {}) => {
        return axiosInstance.delete(url, config)
    }, 
    post: (url, body, config = {}) => {
        return axiosInstance.post(url, body, config)
    },
    put: (url, body, config = {}) => {
        return axiosInstance.put(url, body, config)
    },
    patch: (url, body, config = {}) => {
        return axiosInstance.patch(url, body, config)
    }
}

export default api