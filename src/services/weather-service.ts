import http from '@utils/axios'
import BaseService from './base-service'
import { WeatherResponse } from '@utils/types'
import { API_KEY } from '@utils/constants'

class WeatherService extends BaseService {
    async getWeatherByValues(val = '&q=London&days=3&aqi=no&alerts=no') {
        return await http.get<WeatherResponse>(`?key=${API_KEY}${val}`)
    }
}

export default new WeatherService()
