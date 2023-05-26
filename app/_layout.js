import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider, Themes } from "../context/auth";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";


const RootLayout = () => {
 const scheme = useColorScheme();
  return (
    <Provider>
      <Themes>
			<SafeAreaProvider>
					<Stack>
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
		</Themes>
    </Provider>
  )
}

export default RootLayout