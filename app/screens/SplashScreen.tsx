import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons name="ios-heart" size={66} color="red" style={styles.icon} />
                <Text style={styles.title}>Docpocket</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    icon: {
        marginBottom: 18
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
    }
})