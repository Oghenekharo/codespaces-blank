import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaProvider>
        <Stack initialRouteName='index'>
            <Stack.Screen 
                name='index'
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: 'white',
                    }
                }}
            />
            <Stack.Screen 
                name='(auth)'
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: 'white',
                    }
                }}
            />
            <Stack.Screen 
                name='authDrawers'
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: 'white',
                    }
                }}
            />
        </Stack>
    </SafeAreaProvider>
  )
}

export default RootLayout