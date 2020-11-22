import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../components/Themed'
import { Logo } from '../components/Logo'
import { Button } from '../components/Form'

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
})