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
                    autoCapitalize={this.props.autoCapitalize}
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
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    ...styles.container,
                    ...this.props.style,
                }}
            >
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export class Form extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {}
        this.inputs = {}
    }
    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.title}>{this.props.title}</Text> 
                {React.Children.map(this.props.children, (child) => {
                    const { name } = child.props

                    if (!this.state[name]) {
                        this.state[name] = ''
                    }

                    this.inputs[name] = child.props

                    return React.cloneElement(child, {
                        ...child.props,
                        onChange: this.handleChange,
                        value: this.state[child.props.name],
                    })
                })}
                <Button title={this.props.submit} style={this.props.buttonStyle} onPress={this.handleSubmit} />
            </View>
        )
    }

    handleChange(evt = {}) {
        const name = evt.target.name
        const value = evt.target.value

        this.setState({ [name]: value })
    }

    async handleSubmit() {
        if (this.state.busy) {
            return
        }

        const values = {}

        for (var i in this.inputs) {
            const input = this.inputs[i]
            const value = this.state[i]

            if (input.required !== false && !value) {
                return
            }

            values[i] = value
        }

        this.setState({ busy: true })

        if (this.props.onSubmit) {
            await this.props.onSubmit(values)
        }

        this.setState({ busy: false })
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
})