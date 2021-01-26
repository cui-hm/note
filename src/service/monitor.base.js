import axios from "axios";
import qs from'qs'

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_MONITOR_CONTEXT_URL + '/',
    paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'comma' })
    },
    headers:{
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.response.use(
    function(response) {
        if(response.data.success) {
            return response.data.data
        } else {
            return Promise.reject(response.data.message)
        }
    },
    function() {
        //logger.error(error)
        return Promise.reject('后台错误，请联系管理员')
    }
)
export default axiosInstance