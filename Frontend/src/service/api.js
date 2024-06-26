import  axios from "axios";
import { getAccessToken,getType } from "../utils/common-utils";
import  {API_NOTIFICATION_MESSAGES , SERVICE_URLS } from "../constants/config";

const API_URL = "http://localhost:8000";
const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 10000,
    headers:{
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        if(config.TYPE.params){
            config.params = config.TYPE.params;
        }else if(config.TYPE.query){
            config.url = config.url + "/" + config.TYPE.query
        }
        return config
    },
    function (err){
        return Promise.reject(err)
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        console.log("response" ,response)
        return processResponse(response);
    },
    function (err) {
        console.log('error' ,err)
        return (processError(err))
    }
    
)

const processResponse = (response) => {
    if(response?.status === 200){
        return {isSuccess : true, data:response.data}
    }
    else{
        return {
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError = (err) =>{
    if(err.response){
        console.log("Error in response",err)
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code : err.response.status
        }
    }
    else if(err.request) {
        console.log("Error in request",err)
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code : ''
        }
    }
    else{
        console.log("Error in network",err)
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.networkError,
            code : ''
        }
    }
}

const API = {};

for (const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] = (body,showUploadProgress,showDownloadProgress ) =>
        axiosInstance({
            method: value.method,
            url:value.url,
            data: value.method === 'DELETE' ? {} : body,
            responseType:value.responseType,
            headers: {
                authorization:getAccessToken()
            },
            TYPE:getType(value,body),
            onUploadProgress:function(progressEvent) {
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress:function (progressEvent) {
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total);
                    showDownloadProgress(percentageCompleted)
                }
            }
        })
    }

export {API} ;