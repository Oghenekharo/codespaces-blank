import React, { useState } from 'react'
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, StatusBar, TextInput, RefreshControl} from 'react-native'
import { Entypo, Feather, Fontisto, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/dashStyle'
import { COLORS } from '../../assets/constants/constants'
import { Drawer } from 'expo-router/drawer';
import Tabs from '../../assets/components/tabs';
import AudioPlayer from '../../assets/components/audio'
import VideoPlayer from '../../assets/components/video'
import SearchForm from '../../assets/components/searchForm';

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
            	<VideoPlayer />
          	)
         break;
        	default: 
         	return (
					<AudioPlayer />
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
				<SearchForm query='services' />
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