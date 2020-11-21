import React from 'react'
import { useColorScheme, ColorSchemeName } from 'react-native';
import useCachedResources from '../hooks/useCachedResources';

export interface IHooksHOCProps {
    isLoadingComplete: boolean
    colorScheme: ColorSchemeName
}

export function withHooks(Component: any) {
    return (props: any) => {
        const isLoadingComplete = useCachedResources()
        const colorScheme = useColorScheme()

        return (
            <Component
                isLoadingComplete={isLoadingComplete}
                colorScheme={colorScheme}
                {...props}
            />
        )
    }
}
