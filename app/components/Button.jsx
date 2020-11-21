import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppTheme } from '../Theme'

export class Button extends React.Component {
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
        backgroundColor: AppTheme.colors.primary,
        padding: 12,
        borderRadius: 6,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        padding: 3,
        //textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})