import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '../components/Button'
import { AppTheme } from '../Theme'

interface FieldProps {
    name: string
    isPassword?: boolean
}

class Field extends React.Component<FieldProps> {
    render() {
        return (
            <View style={styles.field}>
                <Text style={styles.label}>{this.props.name}</Text>
                <TextInput style={styles.input} secureTextEntry={this.props.isPassword}></TextInput>
            </View>
        )
    }
}

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons name="ios-heart" size={56} color={AppTheme.colors.primary} style={styles.icon} />
                <Field name="username" />
                <Field name="password" isPassword={true} />
                <Button title="Login" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        padding: 45,
        width: '100%',
    },
    input: {
        borderBottomColor: AppTheme.colors.primary,
        borderBottomWidth: 1,
        padding: 6  ,
        fontSize: 18,
        minWidth: '100%'
    },
    icon: {
        marginBottom: 80,
    },
    label: {
        color: AppTheme.colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontWeight: '600',
        marginBottom: 4
    },
    field: {
        marginBottom: 40
    },
    button: {
        backgroundColor: '#FFF',
    }
})