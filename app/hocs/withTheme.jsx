import { useTheme } from '@react-navigation/native'
import React from 'react'

export function withTheme(Component) {
    return (props) => {
        const { colors } = useTheme()

        return (
            <Component
                colors={colors}
                {...props}
            />
        )
    }
}
