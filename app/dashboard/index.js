import React, { useState } from 'react'
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, StatusBar, TextInput, RefreshControl} from 'react-native'
import { Entypo, Feather, Fontisto, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/dashStyle'
import { COLORS } from '../../assets/constants/constants'
import { Drawer } from 'expo-router/drawer';
import Tabs from '../../assets/components/tabs';
import AudioPlayer from '../../assets/components/audio'

const tabs = ["radio", "tv"];

const Dashboard = () => {
	const [refreshing, setRefreshing] = useState(false);
	const {credentials, clearCredentials} = useAuth();
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const {theme, setTheme} = useThemeContext()
	const {username} = credentials;

	const displayTabContent = () => {
    switch(activeTab) {
        case "radio":
          return (
            <AudioPlayer />
          )
          break;
        case "tv":
          return (
            <View>
				<Text>Hello Tv</Text>
			</View>
          )
          break;
        default: 
          return (
            <View>
					<Text>Hello Radio</Text>
				</View>
          )
        break;
      }
  }
	return (
		<ScrollView 
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} /> }
		>
			<Drawer.Screen
				options={{
					headerShown: true,
					headerStyle: {
						backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
					},
					headerTitleStyle: {
						fontFamily: 'DMMedium'
					},
					headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white ,
					headerTitle: `Dashboard`,
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity style={{paddingRight: 12}} onPress={() => {}}>
							<Entypo name="user" color={theme == 'light' ? COLORS.dark : COLORS.white } size={20} />
						</TouchableOpacity>
					)
				}}
			/>
			<StatusBar 
				barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
			/>
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<Text style={theme == 'light' ? stylesLight.header : stylesDark.header}>Welcome {username}</Text>
				<View style={theme == 'light' ? stylesLight.searchCover : stylesDark.searchCover}>
					<View style={theme == 'light' ? stylesLight.searchContainer : stylesDark.searchContainer}>
						<TextInput
							style={theme == 'light' ? stylesLight.textInput : stylesDark.textInput}
							placeholderTextColor={theme == 'light' ? COLORS.dimgray : COLORS.white}
							placeholder='Search community'
						/>
						<TouchableOpacity style={theme == 'light' ? stylesLight.searchBtn : stylesDark.searchBtn}>
							<Feather name="search" color={theme == 'light' ? COLORS.white : COLORS.lightText } size={20} />
						</TouchableOpacity>
					</View>
				</View>
				<View></View>
				<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
					<Tabs 
                  tabs={tabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                /> 
				</View>
				<View>
					{displayTabContent()}
				</View>
			</SafeAreaView>
		</ScrollView>
  )
}

export default Dashboard