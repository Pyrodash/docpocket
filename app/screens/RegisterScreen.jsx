import React from 'react'
import { Field } from '../components/Form'
import { inject, observer } from 'mobx-react'
import API from '../Api'
import { sleep } from '../utils'
import { AuthScreen } from './AuthScreen'

class RegisterScreen extends AuthScreen {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = {
            title: 'Register',
            submit: 'Sign Up',
            messageTxt: "Already have an account?",
            messageLinkTxt: "Sign in",
            messageLink: '/login'
        }
    }

    renderFormContent() {
        return (
            <>
                <Field
                    name="firstName"
                    label="First Name"
                />
                <Field
                    name="lastName"
                    label="Last Name"
                />
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
                <Field
                    name="gender"
                    label="Gender"
                />
                <Field
                    name="birthday"
                    label="Birthday"
                />
            </>
        )
    }

    async handleSubmit(data) {
        const { 
            firstName,
            lastName,
            email,
            password,
            gender,
            birthday
        } = data
        const { store } = this.props
        
        store.loading.show('Creating account')
        
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
            }
        } catch(err) {
            store.loading.hide()

            this.showError('An error occured. Please try again later.')
        }
    }
}

export default inject('store')(observer(RegisterScreen))
