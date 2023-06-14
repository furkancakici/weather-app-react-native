import { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Calendar, MagnifyingGlass } from '@nandorojo/heroicons/24/outline'
import { MapPin } from '@nandorojo/heroicons/20/solid'

const Home = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const [locations, setLocations] = useState<number[]>([1, 2, 3])

    return (
        <View className='flex-1 relative'>
            <StatusBar style='light' />
            <Image source={require('../assets/images/bg.png')} blurRadius={70} className='absolute h-full w-full' />
            <SafeAreaView className='flex flex-1'>
                {/* search block */}
                <View className='mx-4 relative z-50 h-20'>
                    <View className={`flex-row justify-end items-center rounded-full ${toggle ? 'bg-white/20' : 'bg-transparent'}`}>
                        {toggle ? <TextInput placeholder='Search' placeholderTextColor='lightgray' className='pl-6 h-10 flex-1 text-base text-white' /> : null}
                        <TouchableOpacity onPress={() => setToggle(!toggle)} className='bg-white/30 rounded-full p-3 m-2'>
                            <MagnifyingGlass width={25} height={25} color='white' />
                        </TouchableOpacity>
                    </View>
                    {/* dropdown block */}
                    {locations.length > 0 && toggle ? (
                        <View className='w-full bg-gray-300 rounded-3xl mt-2'>
                            {locations.map((item, idx) => {
                                const lastItem = idx + 1 === locations.length
                                return (
                                    <TouchableOpacity key={idx} className={`flex-row items-center border-0 py-2 px-4 m-1 ${lastItem ? 'border-0' : 'border-b-2 border-gray-400'}`}>
                                        <MapPin width={20} height={20} color='gray' />
                                        <Text className='ml-2'>London, United Kingdom</Text>
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
                        London <Text className='text-gray-300 text-xl font-semibold'>United Kingdom</Text>
                    </Text>
                    {/* weather image */}
                    <View className='flex-row justify-center'>
                        <Image source={require('../assets/images/partlycloudy.png')} className='w-52 h-52' />
                    </View>
                    {/* degree celcius */}
                    <View className='space-y-2 items-center'>
                        <Text className='font-bold text-6xl text-white ml-3'>23&#176;</Text>
                        <Text className='text-white text-xl tracking-widest'>Partly Cloudly</Text>
                    </View>
                    {/* other stats */}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/wind.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>22km</Text>
                        </View>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/drop.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>23%</Text>
                        </View>
                        <View className='flex-row items-center space-x-2'>
                            <Image source={require('../assets/icons/sun.png')} className='w-6 h-6' />
                            <Text className='text-base font-semibold text-white'>6:05 AM</Text>
                        </View>
                    </View>
                    {/* forecaset for next days */}
                    <View className='mb-2 space-y-3'>
                        <View className='flex-row items-center mx-5 space-x-2'>
                            <Calendar width={22} height={22} color='white' />
                            <Text className='text-white text-base'>Daily forecast</Text>
                        </View>
                        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20'>
                                <Image source={require('../assets/images/heavyrain.png')} className='w-11 h-11' />
                                <Text className='text-white'>Monday</Text>
                                <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20'>
                                <Image source={require('../assets/images/heavyrain.png')} className='w-11 h-11' />
                                <Text className='text-white'>Monday</Text>
                                <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20'>
                                <Image source={require('../assets/images/heavyrain.png')} className='w-11 h-11' />
                                <Text className='text-white'>Monday</Text>
                                <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                            </View>
                            <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20'>
                                <Image source={require('../assets/images/heavyrain.png')} className='w-11 h-11' />
                                <Text className='text-white'>Monday</Text>
                                <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home
