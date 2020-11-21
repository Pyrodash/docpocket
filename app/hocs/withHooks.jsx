import React from 'react'
import { useColorScheme, ColorSchemeName } from 'react-native';
import useCachedResources from '../hooks/useCachedResources';

export function withHooks(Component) {
    return (props) => {
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
