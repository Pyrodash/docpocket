import { useTheme } from '@react-navigation/native'
import React from 'react'

export interface IThemeProps {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    }
}

export function withTheme(Component: any) {
    return (props: any) => {
        const { colors } = useTheme()

        return (
            <Component
                colors={colors}
                {...props}
            />
        )
    }
}
