import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Stack, Tabs, Link } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import styles from '../../styles/authStyle'

const Login = () => {
  return (
    <View style={styles.page}>
		<View style={styles.container}>
			<Tabs.Screen 
				options={{
					headerShown: true,
					headerTitle: 'Login',
					headerTitleAlign: 'center',
					title: 'Login',
					tabBarIcon: () => <Entypo name="home" color="black" size={25} />
				}}
			/>
			<Text>Login</Text>
			<Link href="/authDrawers/about">About</Link>
		</View>
	 </View>
  )
}

export default Login