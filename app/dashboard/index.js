import React from 'react'
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import {Stack} from 'expo-router'
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/authStyle'

const Dashboard = () => {
	const {credentials, clearCredentials} = useAuth();
	const {theme} = useThemeContext()
	const {username} = credentials
	console.log(theme)
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
						<TouchableOpacity onPress={() => clearCredentials} style={stylesDark.button}>
							<Text>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
  )
}

export default Dashboard