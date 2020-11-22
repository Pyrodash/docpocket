import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Field } from '../components/Form'
import { AppTheme } from '../Theme'
import { View, Text } from '../components/Themed'
import { Link } from '@react-navigation/native'
import { inject, observer } from 'mobx-react'
import { showMessage, hideMessage } from 'react-native-flash-message'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            email: '',
            password: '',
            busy: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Login</Text> 
                    <Field
                        name="email"
                        label="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <Field
                        name="password"
                        label="Password"
                        isPassword={true}
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <Button title="Log In" onPress={this.handleSubmit} />
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

    handleChange(evt = {}) {
        const name = evt.target.name
        const value = evt.target.value

        this.setState({ [name]: value })
    }

    handleSubmit() {
        if (this.state.busy) {
            return
        }

        if (!this.state.email || !this.state.password) {
            return
        }

        hideMessage()

        const { email, password } = this.state
        const { store } = this.props

        this.state.busy = true

        store.loading.show('Logging In')
        store.authStore.login(email, password).then(({ status, code }) => {
            if (!status) {
                switch (code) {
                    case 401:
                        this.showError('Invalid username or password.')
                        break
                }
            }

            store.loading.hide()
        }).catch((err) => {
            this.showError('An error occured. Please try again later.')
        })
    }

    showError(msg) {
        showMessage({
            message: 'Error',
            description: msg,
            type: 'danger',
        })
    }
}

export default inject('store')(observer(LoginScreen))

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