"use client"
import Axios, { AxiosRequestConfig } from "axios"
import { Api_URL } from "@/config"
import storage from "@/utils/storage"






export const axiosApiInstance  = Axios.create({
    baseURL : Api_URL,
    // maxBodyLength: Infinity,
    // withCredentials: true
    // xsrfCookieName:"XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN"
      
})



function authRequestInterceptor(config: AxiosRequestConfig): any {
    if(config){
        config.headers = {
            ...config.headers , 
            Accept : 'application/json' ,    
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Credentials": true
        }


        // if(storage.getToken()){
        //     config.headers.authorization = `Bearer ${storage.getToken()}`
        // }
    }
    return config;
}

axiosApiInstance.interceptors.request.use(authRequestInterceptor)




axiosApiInstance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    async (error) => {

        return Promise.reject(error);
        
    }
    
);

export const axios = axiosApiInstance;