import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
})

http.interceptors.request.use(config => {
    config.url = '/forecast.json'

    const params = {
        key: 'f07394dd9d194b4d9f8152832231106',
        ...config.params
    }

    config.params = params

    return config
})

http.interceptors.response.use(response => {
    return response
})

export default http
