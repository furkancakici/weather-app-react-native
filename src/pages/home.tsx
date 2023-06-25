import { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Calendar, MagnifyingGlass } from '@nandorojo/heroicons/24/outline'
import { MapPin } from '@nandorojo/heroicons/20/solid'
import { useQuery } from '@tanstack/react-query'
import WeatherService from '@services/weather-service'
import { weatherImages } from '@utils/constants'
import { useDebounce } from 'usehooks-ts'

const Home = () => {
    const [toggle, setToggle] = useState(false)
    const [searchVal, setSearchVal] = useState('')
    const [cityName, setCityName] = useState('Ankara')
    const debouncedSearchVal = useDebounce(searchVal, 200)

    const { data: dataLocation } = useQuery(['get-locations', debouncedSearchVal], () => WeatherService.getLocationByValue(debouncedSearchVal), {
        enabled: debouncedSearchVal.length > 2
    })
    const { data: getWeatherValue } = useQuery(['get-weathers', cityName], () => WeatherService.getWeatherForecastByValues(cityName), {
        enabled: !!cityName
    })

    return (
        <View className='flex-1 relative'>
            <StatusBar style='light' />
            <Image source={require('../assets/images/bg.png')} blurRadius={70} className='absolute h-full w-full' />
            <SafeAreaView className='flex flex-1'>
                {/* search block */}
                <View className='mx-4 relative z-50 h-20'>
                    <View className={`flex-row justify-end items-center rounded-full ${toggle ? 'bg-white/20' : 'bg-transparent'}`}>
                        {toggle ? (
                            <TextInput placeholder='Search' onChangeText={setSearchVal} placeholderTextColor='lightgray' className='pl-6 h-10 flex-1 text-base text-white' />
                        ) : null}
                        <TouchableOpacity onPress={() => setToggle(!toggle)} className='bg-white/30 rounded-full p-3 m-2'>
                            <MagnifyingGlass width={25} height={25} color='white' />
                        </TouchableOpacity>
                    </View>
                    {/* dropdown block */}
                    {dataLocation?.data.length! > 0 && toggle ? (
                        <View className='w-full bg-gray-300 rounded-3xl mt-2'>
                            {dataLocation?.data.map((item, idx) => {
                                const lastItem = idx + 1 === dataLocation?.data.length
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setCityName(item?.name)
                                            setToggle(false)
                                        }}
                                        key={idx}
                                        className={`flex-row items-center border-0 py-2 px-4 m-1 ${lastItem ? 'border-0' : 'border-b-2 border-gray-400'}`}>
                                        <MapPin width={20} height={20} color='gray' />
                                        <Text className='ml-2'>
                                            {item?.name}, {item?.country}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    ) : null}
                </View>
                {/* forecast block */}
                <View className='mx-4 flex flex-1 justify-around mb-2'>
                    {/* location */}
                    <Text className='text-white text-center text-2xl font-bold'>
                        {getWeatherValue?.data?.location?.name} <Text className='text-gray-300 text-xl font-semibold'>{getWeatherValue?.data.location.country}</Text>
                    </Text>
                    {/* weather image */}
                    <View className='flex-row justify-center'>
                        <Image source={weatherImages[getWeatherValue?.data?.current?.condition.text || 'other']} className='w-52 h-52' />
                    </View>
                    {/* degree celcius */}
                    <View className='space-y-2 items-center'>
                        <Text className='font-bold text-6xl text-white ml-3'> {getWeatherValue?.data?.current?.temp_c}&#176;</Text>
                        <Text className='text-white text-xl tracking-widest'>{getWeatherValue?.data?.current?.condition.text}</Text>
                    </View>
                    {/* other stats */}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/wind.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>{getWeatherValue?.data?.current?.wind_kph}km</Text>
                        </View>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/drop.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>{getWeatherValue?.data?.current?.humidity}%</Text>
                        </View>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/sun.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>{getWeatherValue?.data?.forecast.forecastday[0].astro?.sunrise}</Text>
                        </View>
                    </View>
                    {/* forecaset for next days */}
                    <View className='mb-2 space-y-3'>
                        <View className='flex-row items-center mx-5 space-x-2'>
                            <Calendar width={22} height={22} color='white' />
                            <Text className='text-white text-base'>Daily forecast</Text>
                        </View>
                        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
                            {getWeatherValue?.data?.forecast?.forecastday?.map((item, index) => {
                                const date = new Date(item?.date)
                                let dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
                                dayName = dayName.split(',')[0]

                                return (
                                    <View key={index} className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20'>
                                        <Image source={weatherImages[item?.day?.condition?.text || 'other']} className='w-11 h-11' />
                                        <Text className='text-white'>{dayName}</Text>
                                        <Text className='text-white text-xl font-semibold'>{item?.day?.avgtemp_c}&#176;</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home
