import http from '@utils/axios'
import BaseService from './base-service'
import { WeatherResponse } from '@utils/types'

class WeatherService extends BaseService {
    async getWeatherByValues() {
        const params = {
            q: 'London',
            days: 3,
            aqi: 'no',
            alerts: 'no'
        }

        return await http.get<WeatherResponse>('', { params })
    }
}

export default new WeatherService()
