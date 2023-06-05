import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView, RefreshControl, FlatList, Image} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useThemeContext, useAuth } from "../../../context/auth";
import { COLORS } from '../../../assets/constants/constants'
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer'
import axios from 'axios';
import { stylesLight } from './serviceStyle';



const Service = () => {
   const [refreshing, setRefreshing] = useState(false);
   const [service, setService] = useState()
	const [comments, setComments] = useState()
	const [cstat, setCStat] = useState(0)
   const params = useSearchParams();
   const router = useRouter()
   const {theme} = useThemeContext()
	const {credentials} = useAuth()
	const {user_id} = credentials
    
   const fetchService = () => {
		const url = 'https://heirtous.com/android/services.php';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'service');
      formData.append('u_id', params.id);
		formData.append('user_id', user_id);

		axios
		.post(url, formData, config)
		.then((result) => {
			if(result.data.status == 'success'){
				setService(result.data.response)
				setComments(result.data.comment)
				setCStat(result.data.c_status)
				// console.log(photosarr)
			}else{
				console.log(result.data.response)
			}
		})
		.catch((error) => {
			console.log(error)
		})	
	}

	useEffect(() => {
		fetchService()
	}, [params.u_id])
  	return (
		<ScrollView
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => fetchService()} /> }
		>
			{service == null || service == undefined
			
			?
			<View style={{flex: 5, height: 900, justifyContent: 'center', alignItems: 'center', backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark}}>
				<ActivityIndicator size="large" color={theme == 'light' ? COLORS.dark : COLORS.white} />
			</View>
			:
			<SafeAreaView style={stylesLight.page}>
				<Drawer.Screen
					options={{
						headerTitle: `${service && service[0].u_name}`,
						headerStyle: {
							backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
							elevation: 5,
							shadowOpacity: 0.25,
							borderBottomWidth: 1,

						},
						headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white,
						headerTitleStyle: {
							fontFamily: 'DMMedium'
						},
						headerShown: true,
						headerShadowVisible: true,
						headerLeft: () => (
							<TouchableOpacity style={{paddingLeft: 12}} onPress={() => router.push('../services')}>
								<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.black : COLORS.white } size={23} />
							</TouchableOpacity>
						)
					}}
				/>
				<View style={{padding: 10}}>
					<Text style={{fontFamily: 'DMBold', fontSize: 16}}>Service Details</Text>
					<View style={{width: '100%', marginTop: 10}}>
						{service && <FlatList
							data={[service[0].u_photo1,service[0].u_photo2]}
							renderItem={({ item }) => (
								<ImagesList photoitem={item} />
							)}
							keyExtractor={(item) => item}
							contentContainerStyle={{ columnGap: 3 }}
							horizontal
						/>}
					</View>
					<View style={{margin: 10}}>
					<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Posted by:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_user} {service[0].verified == 1 ? <FontAwesome name='check-circle' color={COLORS.dark} size={15}  /> : ''}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Service:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_name}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Location:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_location}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Church:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_church}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Contact:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_contacts}</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_email}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18}}>Description:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14}}>{service[0].u_desc}</Text>
						</View>
					</View>
				</View>
				{/* <Comment comments={comments} /> */}
			</SafeAreaView>}
		</ScrollView>
  )
}

const ImagesList = ({photoitem}) => {
	return (
		<View style={{height: 250, width: 330}}>
			<Image 
				source={{uri: `https://heirtous.com/assets/images/uploads/${photoitem}`}}
				resizeMode='contain'
				style={{borderRadius: 10, height: '100%', width: '100%'}}
			/>
		</View>
	)
}

const Comment = ({comments}) => {
	return (
		<ScrollView>
			<View>
				<Text>{comments}</Text>
			</View>
		</ScrollView>
	)
}

const CommentForm = () => {
	return (
		<View>
			<Text>CommentForm</Text>
		</View>
	)
}

export default Service