import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Form } from '../components/Form'
import { AppTheme } from '../Theme'
import { View, Text } from '../components/Themed'
import { Link } from '@react-navigation/native'
import { showMessage, hideMessage } from 'react-native-flash-message'

export class AuthScreen extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = { error: false }
        this.config = {}
    }

    renderFormContent() {}

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
                    <Form
                        title={this.config.title}
                        submit={this.config.submit}
                        onSubmit={this.handleSubmit}
                        style={styles.form}
                        buttonStyle={{
                            marginBottom: 10
                        }}
                    >
                        {this.renderFormContent().props.children}
                    </Form>
                    <View style={styles.message}>
                        <Text style={styles.messageTxt}>{this.config.messageTxt}</Text>
                        <Link to={this.config.messageLink}>
                            <Text style={styles.link}>{this.config.messageLinkTxt}</Text>
                        </Link>
                    </View>
                </ScrollView>
            </View>
        )
    }

    async handleSubmit(data) {}

    showError(msg) {
        this.setState({ error: true })
        showMessage({
            message: 'Error',
            description: msg,
            type: 'danger',
            autoHide: false,  
        })
    }

    hideError() {
        this.setState({ error: false })
        hideMessage()
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
    },
    scrollContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        padding: 25,
    },
    scrollView: {
    },
    form: {
        marginTop: 'auto',
        marginBottom: 'auto',
        flex: 0,
    },
    message: {
        color: 'grey',
        fontSize: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    messageTxt: {
        marginRight: 5,
        fontSize: 15
    },
    link: {
        color: AppTheme.colors.primary,
        fontWeight: '700',
        fontSize: 16,
    },
})
