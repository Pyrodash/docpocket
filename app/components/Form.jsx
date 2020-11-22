import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AppTheme } from '../Theme'
import { View, Text } from '../components/Themed'

export class Field extends React.Component {
    render() {
        return (
            <View style={styles.field}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    name={this.props.name}
                    style={styles.input}
                    secureTextEntry={this.props.isPassword}
                    onChangeText={(text) => {
                        if (this.props.onChange) {
                            this.props.onChange({
                                target: {
                                    name: this.props.name,
                                    value: text,
                                }
                            })
                        }
                    }}
                    value={this.props.value}
                />
            </View>
        )
    }
}

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
    },
    field: {
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 8,
        fontSize: 20,
        borderRadius: 4
    },
})