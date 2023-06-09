import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView, Modal, TextInput, RefreshControl, FlatList, Image} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useAuth } from "../../../context/auth";
import { COLORS } from '../../../assets/constants/constants'
import { Ionicons, FontAwesome, Entypo} from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer'
import axios from 'axios';
import { stylesLight, stylesDark } from './serviceStyle';
import {decode} from 'html-entities';



const Service = () => {
   const [refreshing, setRefreshing] = useState(false);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [message, setMessage] = useState('')

	//Modal content visibility
	const [modalVisible, setModalVisible] = useState(false);

   const [service, setService] = useState()
	const [comments, setComments] = useState()
	const [userComment, setUserComment] = useState('')
	const [cstat, setCStat] = useState(0)
	const [owner, setOwner] = useState('')
   const params = useSearchParams();
   const router = useRouter()
   const {credentials} = useAuth()
	const {user_id, username, theme} = credentials
	const [photos, setPhotos] = useState([])
    
   const fetchService = () => {
		const url = 'https://heirtous.com/api/services';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'service');
      formData.append('u_id', params.id);
		formData.append('user_id', user_id);

		axios
		.post(url, formData, config)
		.then(async (result) => {
			if(result.data.status == 'success'){
				setService(result.data.response)
				setComments(result.data.comment)
				setCStat(result.data.c_status)
				setOwner(result.data.owner)
				if(photos.length <= 0){
					setPhotos(photos => [...photos, result.data.response[0].u_photo1])
					if(result.data.response[0].u_photo2 != null){
						setPhotos(photos => [...photos, result.data.response[0].u_photo2])
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

	const addComment = () => {
		setIsSubmitting(true)
		const url = 'https://heirtous.com/api/services';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'addcomment');
		formData.append('username', username);
		formData.append('user_id', user_id);
		formData.append('uploadid', service[0].u_id);
		formData.append('comment', userComment);

		if(userComment == '' || userComment == null){
			setMessage('Please enter a comment to add')
			setIsSubmitting(false)
		}else{
			axios
				.post(url, formData, config)
				.then(async (response) => {
					console.log(response.data)
					if(response.data.status == 'success'){
						setMessage(response.data.response)
						setUserComment('')
						fetchService()
						setTimeout(() => {
							setModalVisible(false)
						}, 1000)
					}else{
						setMessage(response.data.response)
					}
				})
				.catch((error) => {
					setMessage(error)
				})
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		fetchService()
		setIsSubmitting(false)
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
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<Drawer.Screen
					options={{
						headerTitle: `${service && decode(service[0].u_name)}`,
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
							<TouchableOpacity style={{paddingLeft: 15}} onPress={() => router.push('../services')}>
								<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.black : COLORS.white } size={25} />
							</TouchableOpacity>
						)
					}}
				/>
				<View style={{padding: 10}}>
					<Text style={{fontFamily: 'DMBold', fontSize: 16, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>Service Details</Text>
					<View style={{width: '100%', marginTop: 10}}>
						{service && <FlatList
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
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{service[0].u_user} {service[0].verified == 1 ? <FontAwesome name='check-circle' color={theme == 'light' ?  'green' : COLORS.lightgray} size={15}  /> : ''}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Service:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{decode(service[0].u_name)}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Location:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{decode(service[0].u_location)}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Church:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{decode(service[0].u_church)}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Contact:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>{service[0].u_contacts}</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{service[0].u_email}</Text>
						</View>
						<View style={{marginBottom: 15}}>
							<Text style={{fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, paddingBottom: 3}}>Description:</Text>
							<Text style={{fontFamily: 'DMRegular', fontSize: 14, color: theme == 'light' ? COLORS.dark : COLORS.lightgray, lineHeight: 25}}>{decode(service[0].u_desc)}</Text>
						</View>
					</View>
					<View style={{margin: 10}}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{padding: 10}}>
								<Text style={{fontFamily: 'DMBold', fontSize: 16, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>Comments</Text>
								<View style={{borderBottomColor: theme == 'light' ? COLORS.dark : COLORS.lightgray, width: '50%', borderBottomWidth: 1, padding: 3}}></View>
							</View>
							<View style={{padding: 10}}>
								{ owner == 'notsame' &&
								<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
									<Text style={{fontFamily: 'DMMedium', color: theme == 'light' ? COLORS.gray : COLORS.lightgray}}>Add a comment</Text>
								</TouchableOpacity>
								}
							</View>
						</View>
						<Comment comments={comments} count={cstat} />
					</View>
				</View>
			</SafeAreaView>}
			<View>
			<Modal
				visible={modalVisible}
				animationType="fade"
				animationInTiming={2000}
				animationOutTiming={2000}
				transparent={true}
				onBackdropPress = {() => setModalVisible(!modalVisible)}
			>
				<View style={theme == 'light' ? stylesLight.modalCenter : stylesDark.modalCenter}>
					<View style={theme == 'light' ? stylesLight.modalStyle : stylesDark.modalStyle}>
						<View style={theme == 'light' ? stylesLight.modalHeader : stylesDark.modalHeader}>
							<Text style={theme == 'light' ? stylesLight.modalHeaderText : stylesDark.modalHeaderText}>
								Add Comment
							</Text>
							<TouchableOpacity
								style={{position: 'absolute', right: 20, top: 15}}
								onPress={
									() => {setModalVisible(!modalVisible) }
								}
							>
								<Entypo name="cross" size={28} color={theme == 'light' ? COLORS.dark : COLORS.lightText} />
							</TouchableOpacity>
						</View>
						<View style={{paddingTop: 10}}>
							<Text style={theme == 'light' ? stylesLight.modalBodyText : stylesDark.modalBodyText}>Please Leave a Comment</Text>
						</View>
						<View style={theme == 'light' ? stylesLight.textInputContainer : stylesDark.textInputContainer}>
							<View style={theme == 'light' ? stylesLight.inputContainer : stylesDark.inputContainer}>
								<View style={theme == 'light' ? stylesLight.leftIcon : stylesDark.leftIcon}>
									<FontAwesome name="comments" color={theme == 'light' ? COLORS.dimgray : COLORS.white} size={20} />
								</View>
								<TextInput
									value={userComment}
									onChangeText={(text) => setUserComment(text)}
									style={theme == 'light' ? stylesLight.textInput : stylesDark.textInput}
									placeholder='Enter comment'
									placeholderTextColor={theme == 'light' ? COLORS.silver : COLORS.lightgray}
									numberOfLines={3} />
							</View>
							<View style={{padding: 10,}}>
								{message && <Text 
									style={
										{
											fontFamily: 'DMMedium', 
											color: theme == 'light' ? COLORS.dark : COLORS.lightgray,
											fontSize: 14,
											textAlign: 'center'
										}
									}>{message}</Text>}
							</View>
							<View style={{alignItems: 'center', marginBottom: 20}}>
								<TouchableOpacity
									disabled={isSubmitting}
									onPress={() => addComment()}
									style={theme == 'light' ? stylesLight.button : stylesDark.button}>
									{isSubmitting == false 
										? <Text style={theme == 'light' ? stylesLight.buttonText : stylesDark.buttonText}>Add Comment</Text>
										:
										<ActivityIndicator size="small" color={theme == 'light' ? COLORS.white : COLORS.blue} />
										}
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal>
			</View>
		</ScrollView>
  )
}

const ImagesList = ({photoitem}) => {
	return (
		<View style={{height: 250, width: 360}}>
			<Image 
				source={{uri: `https://heirtous.com/assets/images/uploads/${photoitem}`}}
				resizeMode='contain'
				style={{borderRadius: 10, height: '100%', width: '100%'}}
			/>
		</View>
	)
}

const Comment = ({comments, count}) => {
	const {credentials} = useAuth()
	const {theme} = credentials
	return (
		<ScrollView style={{maxHeight: 300, backgroundColor: theme == 'light' ? COLORS.lightgray : COLORS.lighter, padding: 10, borderRadius: 10}} showsVerticalScrollIndicator={false}>
			{count == 0 ? <View> 
				<Text style={{fontSize: 14, fontFamily: 'DMMedium', color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>No comments yet</Text>
			</View> :
			<View style={{marginTop: 7}}>
				{comments && comments.map((item, index) => (
					<View key={index} style={{marginBottom: 8}}>
						<Text style={{fontFamily: 'DMBold', fontSize: 17, marginBottom: 3, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{item.username}</Text>
						<Text style={{fontFamily: 'DMRegular', fontSize: 14, marginBottom: 3, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{decode(item.comment)}</Text>
						<Text style={{fontFamily: 'DMBold', fontSize: 12, marginBottom: 3, color: theme == 'light' ? COLORS.dark : COLORS.lightgray}}>{item.comm_date}</Text>
					</View>
				))}
			</View>
			}
		</ScrollView>
	)
}

export default Service