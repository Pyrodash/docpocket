import { StatusBar } from 'expo-status-bar'
import { observer, Provider } from 'mobx-react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import store from './stores'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen'
import Spinner from 'react-native-loading-spinner-overlay'
import { withHooks, IHooksHOCProps } from './hocs/withHooks'
import * as mobx from 'mobx'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { View } from './components/Themed'

const Stack = createStackNavigator()

class App extends React.Component {
    store = store

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

        const { loading } = this.store

        return (
            <SafeAreaProvider>
                <Provider store={this.store}>
                    <Spinner
                        visible={loading.visible}
                        textContent={loading.text}
                        textStyle={mobx.toJS(loading.style)}
                    />
                    <Navigation colorScheme={this.props.colorScheme} />
                </Provider>
                <StatusBar />
                <FlashMessage position="top" floating={true} />
            </SafeAreaProvider>
        )
    }
}

export default withHooks(observer(App))
