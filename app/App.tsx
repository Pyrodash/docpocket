import { StatusBar } from 'expo-status-bar'
import { observer, Provider } from 'mobx-react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import { RootStore } from './stores'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from './components/Themed'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import { View } from 'react-native'
import { withHooks, IHooksHOCProps } from './hocs/withHooks'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

@observer
class App extends React.Component<IHooksHOCProps> {
    private store = new RootStore()

    constructor(props: IHooksHOCProps) {
        super(props)

        this.store.authStore.getToken()
    }

    render() {
        const { authStore } = this.store

        let body

        if (!this.props.isLoadingComplete) {
            return null
        } else if (!authStore.isLoading) {
            body =  (
                <SafeAreaProvider>
                    <Stack.Navigator>
                        {authStore.isLoggedIn ? (
                            <Stack.Screen name="Main" component={MainScreen} />
                        ) : (
                            <Stack.Screen name="Login" component={LoginScreen} />
                        )}
                    </Stack.Navigator>
                    <StatusBar />
                </SafeAreaProvider>
            )
        } else {
            body = <SplashScreen />
        }

        return (
            <Provider store={this.store}>
                <NavigationContainer>{body}</NavigationContainer>
            </Provider>
        )
    }
}

export default withHooks(App)
