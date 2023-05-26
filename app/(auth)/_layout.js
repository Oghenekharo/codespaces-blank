import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { useThemeContext } from "../../context/auth";
import {COLORS, SITE_NAME} from '../../assets/constants/constants'

const Layout = () => {
const {theme} = useThemeContext();
  return ( 
		<Tabs screenOptions={{
			headerShown: false,
			headerTitle: 'Test',
			tabBarStyle: {
				backgroundColor: theme == 'light' ? COLORS.white : COLORS.blue,
				tabBarSelectedButtonColor: '#fff',
			},
			tabBarActiveTintColor: theme == 'light' ? COLORS.blue : theme == 'dark' ? COLORS.white : COLORS.gray
		}}>
			<Tabs.Screen
				name='login'
				options={{
					headerShown: false,
					headerTitle: 'Login',
					headerTitleAlign: 'center',
					title: 'Login',
					tabBarIcon: ({ focused }) => <Entypo name="home" color={focused && theme == 'light' ? COLORS.blue : focused && theme == 'dark' ? COLORS.white : COLORS.gray } size={25} />
				}}
			/>
			<Tabs.Screen
				name='register'
				options={{
					// headerShown: false,
					headerTitle: 'Register',
					title: 'Register',
					tabBarIcon: ({ focused }) => <Entypo name="user" color={focused && theme == 'light' ? COLORS.blue : focused && theme == 'dark' ? COLORS.white : COLORS.gray } size={25} />
				}}
			/>
		</Tabs>
  )
}

export default Layout