import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView, Modal, TextInput, RefreshControl, FlatList, Image} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useAuth } from "../../../context/auth";
import { COLORS } from '../../../assets/constants/constants'
import { Ionicons, FontAwesome, Entypo} from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer'
import axios from 'axios';
import { stylesLight, stylesDark } from '../service/serviceStyle';



const Service = () => {
   const [refreshing, setRefreshing] = useState(false);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [message, setMessage] = useState('')

	//Modal content visibility
	const [modalVisible, setModalVisible] = useState(false);

   const [gift, setGift] = useState()
	const [owner, setOwner] = useState('')
   const params = useSearchParams();
   const router = useRouter()
   const {credentials} = useAuth()
	const {user_id, username, theme} = credentials
	const [photos, setPhotos] = useState([])
    
   const fetchGift = () => {
		const url = 'https://heirtous.com/api/gifts';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'getgift');
      formData.append('giftid', params.gift_id);
		formData.append('user_id', user_id);

		axios
		.post(url, formData, config)
		.then(async (result) => {
			if(result.data.status == 'success'){
				setGift(result.data.response)
				setOwner(result.data.owner)
				if(photos.length <= 0){
					setPhotos(photos => [...photos, result.data.response[0].photo1])
					if(result.data.response[0].photo2 != null){
						setPhotos(photos => [...photos, result.data.response[0].photo2])
					}
				}
			}else{
				console.log(result.data.response)
			}
		})
		.catch((error) => {
			console.log(error)
		})	
	}
	
	// console.log(photos)

	const fetchChats = () => {

	}

	useEffect(() => {
		fetchGift()
	}, [params.gift_id])
  	return (
		<ScrollView
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => fetchGift()} /> }
		>
			{gift == null || gift == undefined
			
			?
			<View style={{flex: 5, height: 900, justifyContent: 'center', alignItems: 'center', backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark}}>
				<ActivityIndicator size="large" color={theme == 'light' ? COLORS.dark : COLORS.white} />
			</View>
			:
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<Drawer.Screen
					options={{
						headerTitle: `${gift && gift[0].type}`,
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
							<TouchableOpacity style={{paddingLeft: 15}} onPress={() => router.push('../gifts')}>
								<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.black : COLORS.white } size={25} />
							</TouchableOpacity>
						)
					}}
				/>
				<View style={{padding: 15}}>
					<Text style={{fontFamily: 'DMBold', fontSize: 16, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>Gift Details</Text>
					<View style={{width: '100%', marginTop: 10}}>
						{gift && <FlatList
							data={photos && photos}
							renderItem={({ item }) => (
								<ImagesList photoitem={item} />
							)}
							keyExtractor={(item) => item}
							contentContainerStyle={{ columnGap: 3 }}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>}
					</View>
					<View style={{margin: 10}}>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Posted by:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{gift[0].username} {gift[0].verified == 1 ? <FontAwesome name='check-circle' color={theme == 'light' ?  'green' : COLORS.lightgray} size={15}  /> : ''}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Date Addede:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{gift[0].date_added}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Location:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{gift[0].location}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Church:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{gift[0].church}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Contact:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>{gift[0].phone}</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{gift[0].email}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Description:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, lineHeight: 25}}>{gift[0].description}</Text>
						</View>
					</View>
				</View>
				<View style={{padding: 15}}>
					{owner && owner == 'same' 
					? 
					<ChatList /> 
					: ''}
				</View>
			</SafeAreaView>}
		</ScrollView>
  )
}

const ImagesList = ({photoitem}) => {
	return (
		<View style={{height: 250, width: 360}}>
			<Image 
				source={{uri: `https://heirtous.com/assets/images/gifts/${photoitem}`}}
				resizeMode='contain'
				style={{borderRadius: 10, height: '100%', width: '100%'}}
			/>
		</View>
	)
}

const ChatList = ({}) => {
	return (
		<View>
			<Text style={{fontFamily: 'DMBold'}}>Chats List</Text>
			<ScrollView
				showsVerticalScrollIndicator={false} 
				showsHorizontalScrollIndicator={false}
			>
				<Text style={{fontFamily: 'DMMedium'}}>All Chats</Text>
			</ScrollView>
		</View>
	)
}

export default Service