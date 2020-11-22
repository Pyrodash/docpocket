import React from 'react'
import { Field } from '../components/Form'
import { inject, observer } from 'mobx-react'
import API from '../Api'
import { sleep } from '../utils'
import { AuthScreen } from './AuthScreen'

class LoginScreen extends AuthScreen {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = {
            title: 'Login',
            submit: 'Log In',
            messageTxt: "Don't have an account?",
            messageLinkTxt: "Create an account",
            messageLink: '/register'
        }
    }

    renderFormContent() {
        return (
            <>
                <Field
                    name="email"
                    label="Email"
                    autoCapitalize="none"
                />
                <Field
                    name="password"
                    label="Password"
                    isPassword={true}
                />
            </>
        )
    }

    async handleSubmit(data) {
        const { email, password } = data
        const { store } = this.props
        
        store.loading.show('Logging In')
        
        if (this.state.error) {
            this.hideError()
            
            await sleep(225)
        }

        try {
            const { status, code } = await API.login(email, password)
            
            store.loading.hide()
            
            if (!status) {
                switch (code) {
                    case 401:
                        this.showError('Invalid username or password.')
                        break
                }
            } else {
                this.props.navigation.navigate('Root')
            }
        } catch(err) {
            store.loading.hide()
            console.error(err)

            this.showError('An error occured. Please try again later.')
        }
    }
}

export default inject('store')(observer(LoginScreen))
