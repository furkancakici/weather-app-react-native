import axios from 'axios'
import { API_KEY } from './constants'

const http = axios

// http://api.weatherapi.com/v1/forecast.json?key=f07394dd9d194b4d9f8152832231106&q=London&days=3&aqi=no&alerts=no

http.interceptors.request.use(config => {
    config.baseURL = 'https://api.weatherapi.com/v1/forecast.json'
    return config
})

http.interceptors.response.use(response => {
    return response
})

export default http
