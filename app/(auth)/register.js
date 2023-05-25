import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Stack, Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import styles from '../../styles/authStyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Register = () => {
  return (
    <View style={styles.page}>
		<View style={styles.container}>
			<Tabs.Screen 
				options={{
                    name:'register',
					// headerShown: false,
					headerTitle: 'Register',
					title: 'Register',
					tabBarIcon: () => <Entypo name="user" color="black" size={25} />
				}}
			/>
			<Text>Register</Text>
		</View>
	 </View>
  )
}

export default Register