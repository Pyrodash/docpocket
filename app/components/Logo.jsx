import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { AppTheme } from '../Theme'
import { View, Text } from './Themed'

export class LogoIcon extends React.Component {
    render() {
        return (
            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Ionicons name="ios-heart" size={66} color={styles.icon.color} />
                </View>
            </View>
        )
    }
}

export class Logo extends React.Component {
    render() {
        return (
            <View>
                <LogoIcon />
                <Text style={styles.title}>
                    doc<Text style={styles.titlePocket}>pocket</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        borderColor: AppTheme.colors.primary,
        borderWidth: 2,
        borderRadius: 50,
        width: 93,
        height: 93,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center'
    },
    icon: {
        color: '#fff',
        backgroundColor: AppTheme.colors.primary,
        padding: 12,
        borderRadius: 64,
        width: 85,
        height: 85,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    titlePocket: {
        //fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    },
})