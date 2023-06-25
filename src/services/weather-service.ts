import http from '@utils/axios'
import BaseService from './base-service'
import { LocationResponse, WeatherResponse } from '@utils/types'
import { API_KEY } from '@utils/constants'

class WeatherService extends BaseService {
    async getWeatherForecastByValues(location: string) {
        const params = {
            q: location,
            days: 5,
            aqi: 'no',
            alerts: 'no'
        }

        return await http.get<WeatherResponse>(`/forecast.json?key=${API_KEY}`, { params })
    }
    async getLocationByValue(city: string) {
        return await http.get<LocationResponse[]>(`/search.json?key=${API_KEY}`, { params: { q: city } })
    }
}

export default new WeatherService()
