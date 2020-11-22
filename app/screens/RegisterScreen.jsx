import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Button, Field } from '../components/Form'
import { AppTheme } from '../Theme'
import { Link } from '@react-navigation/native'

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Sign Up</Text> 
                    <Field name="Email" />
                    <Field name="Password" isPassword={true} />
                    <Button title="Sign Up" onPress={()=>{}} />
                </View>
                <View style={styles.registerMsg}>
                    <Text style={styles.registerText}>Already have an account?</Text>
                    <Link to="/login">
                        <Text style={styles.link}>Sign In</Text>
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