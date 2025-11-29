import axios from "axios";

const api = axios.create({
    baseURL: "https://agenda-7q4f.onrender.com"
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export default api