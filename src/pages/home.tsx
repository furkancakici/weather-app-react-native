import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <View className='flex-1 relative'>
            <StatusBar style='light' />
            <Image source={require('../assets/images/bg.png')} blurRadius={70} className='absolute h-full w-full' />
            <SafeAreaView className='flex flex-1'>
                <View className='mx-4 relative z-50 h-20'>
                    <View className='flex-row justify-end items-center rounded-full bg-white/20'>
                        <TextInput placeholder='Search' placeholderTextColor='lightgray' className='pl-6 h-10 flex-1 text-base' />
                        <TouchableOpacity className='bg-white/30 rounded-full p-3 m-1'>
                            <Text>Icon</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home
