import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppTheme } from '../Theme'

interface IButtonProps {
    title: string
    onPress: (e: GestureResponderEvent) => void
}

export class Button extends React.Component<IButtonProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 6,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    text: {
        color: AppTheme.colors.primary,
        fontSize: 18,
        padding: 3,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})