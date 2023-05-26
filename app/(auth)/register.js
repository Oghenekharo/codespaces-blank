import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Stack, Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import {stylesLight, stylesDark} from '../../assets/styles/authStyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useThemeContext } from "../../context/auth";

const Register = () => {
const { theme } = useThemeContext();
  return (
    <View style={theme == 'light' ? stylesLight.page : stylesDark.page}>
		<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
			
			<Text>Register</Text>
		</View>
	 </View>
  )
}

export default Register