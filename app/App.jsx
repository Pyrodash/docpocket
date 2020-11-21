import { StatusBar } from 'expo-status-bar'
import { observer, Provider } from 'mobx-react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import { RootStore } from './stores'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MainScreen from './screens/MainScreen'
import { withHooks, IHooksHOCProps } from './hocs/withHooks'

const Stack = createStackNavigator()

class App extends React.Component {
    store = new RootStore()

    constructor(props) {
        super(props)

        this.store.authStore.getToken()
    }

    render() {
        const { authStore } = this.store

        if (!this.props.isLoadingComplete) {
            return null
        } else if (authStore.isLoading) {
            return <SplashScreen />
        }

        return (
            <Provider store={this.store}>
                <SafeAreaProvider>
                    <Navigation colorScheme={this.props.colorScheme} />
                </SafeAreaProvider>
            </Provider>
        )
    }
}

export default withHooks(observer(App))
