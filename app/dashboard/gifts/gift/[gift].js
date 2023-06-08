import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView, Modal, TextInput, RefreshControl, FlatList, Image} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useAuth } from "../../../../context/auth";
import { COLORS } from '../../../../assets/constants/constants'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer'
import axios from 'axios';
import { stylesLight, stylesDark } from '../../service/serviceStyle';



const Service = () => {
   const [refreshing, setRefreshing] = useState(false);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [message, setMessage] = useState('')

	//Modal content visibility
	const [modalVisible, setModalVisible] = useState(false);

   const [gift, setGift] = useState()
	const [chats, setChats] = useState()
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
		const url = 'https://heirtous.com/api/chats';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'chats');
      formData.append('gift_id', params.gift_id);
		formData.append('user_id', user_id);

		axios
		.post(url, formData, config)
		.then(async (result) => {
			if(result.data.status == 'success'){
				if(result.data.response[0].receiver == user_id){
					setChats(result.data.response)
				}
			}else{
				console.log(result.data.response)
			}
		})
		.catch((error) => {
			console.log(error)
		})
	}

	useEffect(() => {
		fetchGift()
		fetchChats()
	}, [params.gift_id])
  	return (
		<ScrollView
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {fetchGift(), fetchChats()}} /> }
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
							<TouchableOpacity style={{paddingLeft: 15}} onPress={() => router.push('/dashboard/gifts')}>
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
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Date Added:</Text>
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
				<View style={
					{
						padding: 15, 
						backgroundColor: theme == 'light' ? COLORS.snow : COLORS.darkgray, 
						borderTopRightRadius: 20, 
						borderTopLeftRadius: 20
					}
				}>
					{owner && owner == 'same' 
					? 
					<View>
						<Text style={{paddingHorizontal: 15, fontFamily: 'DMBold', fontSize: 20, color: theme == 'light' ? COLORS.darkgray : COLORS.snow}}>Chat List</Text>
						<ScrollView
							showsVerticalScrollIndicator={false} 
							showsHorizontalScrollIndicator={false}
						>
						{chats && chats.map((item, index) => (
							<ChatList key={index} chat={item} /> 
						))}
						</ScrollView>
					</View>
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

const ChatList = ({chat}) => {
	const {credentials} = useAuth()
	const router = useRouter()
	const {theme} = credentials;
	return (
		<TouchableOpacity style={{padding: 10}} onPress={() => router.push({pathname: "../../chats/", params: {receiver: chat.username, gift_id: chat.gift_id, user_id: chat.sender}})}>
				<View style={
					{
						backgroundColor: theme == 'light' ? COLORS.blue : COLORS.lightBody,
						padding: 12, 
						borderRadius: 10,
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center'
					}
				}>
					<View style={{flexDirection: 'row'}}>
						<Image
							source={{uri: `https://heirtous.com/assets/images/users/${chat.photo}`}}
							style={{height:60, width: 60, borderRadius: 200 / 2, borderWidth: 2, borderColor: COLORS.white}}
							resizeMode='contain'
						/>
						<View style={{paddingLeft: 15, paddingTop: 10, width: 160}}>
							<Text style={{fontFamily: 'DMBold', color: COLORS.white, fontSize: 16, marginBottom: 7}}>{chat.fullname}</Text>
							<Text numberOfLines={1} style={{fontFamily: 'DMRegular', color: COLORS.lightgray}}>{chat.message}</Text>
						</View>
					</View>
					<View>
					<Text style={{fontFamily: 'DMMedium', color: COLORS.snow, fontSize: 13}}>{chat.datelogged}</Text>
					<Text style={{fontFamily: 'DMMedium', color: COLORS.snow, fontSize: 11}}>{chat.time}</Text>
					</View>
				</View>
		</TouchableOpacity>
	)
}

export default Service