import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <View className='flex-1 relative'>
            <StatusBar style='light' />
            <SafeAreaView className='flex flex-1'>
                <Text className='text-3xl text-lime-900 bg-zinc-200'>Home</Text>
            </SafeAreaView>
        </View>
    )
}

export default Home
