import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
})

http.interceptors.request.use(config => {
    return config
})

http.interceptors.response.use(response => {
    return response
})

export default http
