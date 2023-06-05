import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, StatusBar, TextInput, RefreshControl, Image } from 'react-native'
import { useThemeContext } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/dashStyle'
import { COLORS } from '../../assets/constants/constants'
import { Ionicons, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';

const Services = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [services, setServices] = useState()
	const {theme} = useThemeContext()
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
	useEffect(() => {
		fetchServices()
	}, [])
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
			<View>
				<Text style={{textAlign: 'left', fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.darkgray : COLORS.lightgray}}>Available services</Text>
			</View>
				<View style={{alignItems: 'center'}}>
					{/* <TouchableOpacity onPress={fetchServices} style={{backgroundColor: theme == 'light' ? COLORS.blue : COLORS.gray, padding: 10}}>
						<Text style={{color: theme == 'light' ? COLORS.darkgray : COLORS.white}}>Services</Text>
					</TouchableOpacity> */}
					<View>
						{services && services.map((item, index) => (
							<Details item={item} key={index} />
						))}
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

const Details = ({item}) => {
	const {theme} = useThemeContext()
	const router = useRouter()
	return (
		<View style={{marginHorizontal: 20, padding: 10}}>
			<View style={theme == 'light' ? stylesLight.serviceContainer : stylesDark.serviceContainer}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<Image
						source={{
							uri: `https://heirtous.com/assets/images/uploads/${item.u_photo1}`
						}}
						resizeMode="contain"
						style={theme == 'light' ? stylesLight.serviceImg : stylesDark.serviceImg}
					/>
					<View style={{paddingLeft: 10}}>
						<View style={{marginBottom: 2}}>
							<Text style={theme == 'light' ? stylesLight.serviceType : stylesDark.serviceType}>{item.u_type}</Text>
						</View>
						<Text style={theme == 'light' ? stylesLight.serviceName : stylesDark.serviceName}>{item.u_name} </Text>
						<View style={{}}>
							<Text style={[theme == 'light' ? stylesLight.serviceText : stylesDark.serviceText, {fontSize: 9}]}>Posted by</Text>
							<Text style={theme == 'light' ? stylesLight.serviceText : stylesDark.serviceText}>{item.u_user} {item.verified == 1 ? <FontAwesome name='check-circle' color={COLORS.white}  /> : <Entypo />}</Text>
						</View>
						<View style={{}}>
							<Text style={theme == 'light' ? stylesLight.serviceText : stylesDark.serviceText}>{item.u_location}</Text>
						</View>
					</View>
				</View>
				<View>
					<TouchableOpacity onPress={() => router.push({pathname: `./service/${item.u_id}`, params: {item}})}>
						<Entypo name="chevron-right" color={COLORS.white} size={25} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default Services