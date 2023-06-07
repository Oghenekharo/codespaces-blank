import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from "../../../context/auth";
import {COLORS} from '../../../assets/constants/constants'

const GiftLayout = () => {
const {credentials} = useAuth()
const {theme} = credentials
const router = useRouter()
  return ( 
		<Tabs screenOptions={{
			headerShown: false,
			tabBarLabelStyle: {
				fontFamily: 'DMRegular',
			},
			tabBarStyle: {
				backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
				tabBarSelectedButtonColor: '#fff',
			},
			tabBarActiveTintColor: theme == 'light' ? COLORS.blue : theme == 'dark' ? COLORS.white : COLORS.lightText
		}}>
			<Tabs.Screen
				name='index'
				options={{
					headerShown: true,
					headerTitle: 'All Gifts',
					headerTitleAlign: 'center',
					title: 'Gifts',
                    headerTitleStyle: {
                        fontFamily: 'DMRegular',
                    },
					headerStyle: {
						backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
					},
					headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white ,
                    headerLeft: () => (
						<TouchableOpacity style={{paddingLeft: 16}} onPress={() => router.back()}>
							<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={23} />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => <FontAwesome5 name="gifts" color={focused && theme == 'light' ? COLORS.blue : focused && theme == 'dark' ? COLORS.white : COLORS.lightText } size={25} />
				}}
			/>
			<Tabs.Screen
				name='addgifts'
				options={{
					headerShown: true,
					headerTitle: 'Add Gifts',
					headerTitleAlign: 'center',
					title: 'Add Gifts',
                    headerLeft: () => (
						<TouchableOpacity style={{paddingLeft: 16}} onPress={() => router.back()}>
							<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={23} />
						</TouchableOpacity>
					),
                    headerTitleStyle: {
                        fontFamily: 'DMRegular',
                    },
					tabBarIcon: ({ focused }) => <FontAwesome5 name="gift" color={focused && theme == 'light' ? COLORS.blue : focused && theme == 'dark' ? COLORS.white : COLORS.lightText } size={25} />
				}}
			/>
            <Tabs.Screen
				name='mygifts'
				options={{
					headerShown: true,
					headerTitle: 'My Gifts',
					headerTitleAlign: 'center',
					title: 'My Gifts',
                    headerTitleStyle: {
                        fontFamily: 'DMRegular',
                    },
                    headerLeft: () => (
						<TouchableOpacity style={{paddingLeft: 16}} onPress={() => router.back()}>
							<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={23} />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => <Ionicons name="gift" color={focused && theme == 'light' ? COLORS.blue : focused && theme == 'dark' ? COLORS.white : COLORS.lightText } size={25} />
				}}
			/>
		</Tabs>
  )
}

export default GiftLayout