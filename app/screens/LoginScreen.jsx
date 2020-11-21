import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Button } from '../components/Button'
import { AppTheme } from '../Theme'
import { View, Text } from '../components/Themed'
import { Link } from '@react-navigation/native'

class Field extends React.Component {
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
                <View style={styles.form}>
                    <Text style={styles.title}>Login</Text> 
                    <Field name="Email" />
                    <Field name="Password" />
                    <Button title="Log In" onPress={()=>{}} />
                </View>
                <View style={styles.registerMsg}>
                    <Text style={styles.registerText}>Don't have an account?</Text>
                    <Link to="/register">
                        <Text style={styles.link}>Create an account</Text>
                    </Link>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: 25,
    },
    form: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
    icon: {},
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
    registerMsg: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    registerText: {
        marginRight: 5,
        fontSize: 15
    },
    link: {
        color: AppTheme.colors.primary,
        fontWeight: '700',
        fontSize: 16,
    },
})