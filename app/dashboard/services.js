import React, { useState } from 'react'
import axios from 'axios'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, StatusBar, TextInput, RefreshControl } from 'react-native'
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/dashStyle'
import { COLORS } from '../../assets/constants/constants'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo} from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';

const Services = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [services, setServices] = useState()
	const {credentials} = useAuth();
	const {theme, setTheme} = useThemeContext()
	const router = useRouter()
	const fetchServices = () => {
		const url = 'https://heirtous.com/android/services.php';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'showservices');

		axios
		.post(url, formData, config)
		.then((result) => {
			// console.log(result.data.response)
			setServices(result.data.response)
		})
		.catch((error) => {
			console.log(error)
		})	
	}
	return (
   	<ScrollView 
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => fetchServices()} /> }
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
					headerTitle: `Services`,
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity style={{paddingRight: 12}} onPress={() => router.back()}>
							<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={23} />
						</TouchableOpacity>
					)
				}}
			/>
			<StatusBar 
				barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
			/>
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<View style={{alignItems: 'center'}}>
					<TouchableOpacity onPress={fetchServices} style={{backgroundColor: theme == 'light' ? COLORS.blue : COLORS.gray, padding: 10}}>
						<Text style={{color: theme == 'light' ? COLORS.darkgray : COLORS.white}}>Services</Text>
					</TouchableOpacity>
					<View>
						{services && services.map((item, index) => (
							<View style={{margin: 8, padding: 10}}>
								<View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300, borderRadius: 10, backgroundColor: COLORS.lighterblue, padding: 15}}>
									<View>
										<View style={{marginBottom: 2}}>
											<Text style={{textAlign: 'left', fontFamily: 'DMRegular', fontSize: 12, color: COLORS.lightgray}}>{item.u_type}</Text>
										</View>
										<Text style={{fontFamily: 'DMBold', fontSize: 19, marginBottom: 3, color: COLORS.white}}>{item.u_name} </Text>
										<View style={{flexDirection: 'row'}}>
											<Entypo name="user" size={14} color="white" style={{paddingRight: 4}}  />
											<Text style={{fontFamily: 'DMRegular', color: COLORS.white, paddingBottom: 5}}>{item.u_user}</Text>
										</View>
										<View style={{flexDirection: 'row'}}>
											<Entypo name="location" size={14} color="white" style={{paddingRight: 4}} />
											<Text style={{fontFamily: 'DMRegular', color: COLORS.white, paddingBottom: 5}}>{item.u_location}</Text>
										</View>
										<View style={{flexDirection: 'row'}}>
											<MaterialIcons name="perm-phone-msg" size={14} color="white" style={{paddingRight: 4}} />
											<Text style={{fontFamily: 'DMRegular', color: COLORS.white, paddingBottom: 5}}>{item.u_contacts}</Text>
										</View>
										<View style={{flexDirection: 'row'}}>
											<MaterialCommunityIcons name="church" size={14} color="white" style={{paddingRight: 4}} />
											<Text style={{fontFamily: 'DMRegular', color: COLORS.white, paddingBottom: 5}}>{item.u_church}</Text>
										</View>
									</View>
									<View>
										<Text>View</Text>
									</View>
								</View>
							</View>
						))}
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default Services