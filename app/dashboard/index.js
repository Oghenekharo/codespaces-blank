import React from 'react'
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import {Stack, useRouter} from 'expo-router'
import { useThemeContext, useAuth } from "../../context/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stylesLight, stylesDark} from '../../assets/styles/authStyle'

const Dashboard = () => {
	const router = useRouter();
	const {credentials, setCredentials} = useAuth();
	const {theme} = useThemeContext()
	
	const {username = ""} = credentials
	
	const clearLogin = () => {
		AsyncStorage.removeItem('Heirtous')
		.then(() => {
			setCredentials(null)
			router.replace("/(auth)/login")
		})
		.catch(error => console.log(error))
	}
	return (
		<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: {
						backgroundColor: 'white',
					},
					headerTitle: `${username}`,
					headerTitleAlign: 'center'
				}}
			/>
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
					<View style={theme == 'light' ? stylesLight.textInputContainer : stylesDark.textInputContainer }>
						<Text>Helo {username}</Text>
						<TouchableOpacity onPress={() => {
							clearLogin()
							router.push('/(auth)/login')
						}} style={stylesDark.button}>
							<Text>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
  )
}

export default Dashboard