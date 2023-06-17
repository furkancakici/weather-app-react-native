import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Home from '@pages/home'

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' options={{ headerShown: false, title: 'Weather App' }} component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    )
}

export default App
