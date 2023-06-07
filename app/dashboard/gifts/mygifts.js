import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, ActivityIndicator, Image, RefreshControl} from 'react-native'
import { useAuth } from '../../../context/auth'
import { stylesLight, stylesDark } from '../../../assets/styles/giftStyle'
import { COLORS } from '../../../assets/constants/constants'
import { Ionicons, FontAwesome, Entypo} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SearchForm from '../../../assets/components/searchForm';
import axios from 'axios'

const MyGifts = () => {
   const [refreshing, setRefreshing] = useState(false);
   const [gifts, setGifts] = useState()
	const {credentials} = useAuth()
   const {theme, user_id} = credentials


   const fetchGifts = () => {
      const url = 'https://heirtous.com/api/gifts';
		let formData = new FormData();
		
		const config = {
         headers: {'Content-Type': 'multipart/form-data'},
      };
		
		formData.append('query', 'mygifts');
      formData.append('user_id', user_id);

      axios
      .post(url, formData, config)
		.then((result) => {
			setGifts(result.data.response)
		})
		.catch((error) => {
			console.log(error)
		})
   }

   useEffect(() => {
		fetchGifts()
	}, [])

   return (
		<ScrollView
         showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
         <RefreshControl refreshing={refreshing} onRefresh={() => fetchGifts()} /> }
      >
         <StatusBar 
				barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
			/>
         <SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<SearchForm query='gifts' />
			   <View>
					<Text style={{textAlign: 'left', fontFamily: 'DMMedium', fontSize: 18, color: theme == 'light' ? COLORS.darkgray : COLORS.lightgray}}>My Gifts</Text>
				</View>
            <View style={{alignItems: 'center'}}>
					<View style={{width: '100%'}}>
						{gifts == null || gifts == undefined ? 
						<View style={{flex: 5, height: 600, justifyContent: 'center', alignItems: 'center', backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark}}>
							<ActivityIndicator size="large" color={theme == 'light' ? COLORS.dark : COLORS.white} />
						</View>
						:
						gifts.map((item, index) => (
							<Details item={item} key={index} />
						))}
					</View>
				</View>
         </SafeAreaView>
      </ScrollView>
   )
}

const Details = ({item}) => {
	const {credentials} = useAuth()
   const {theme} = credentials
	const router = useRouter()
	return (
		<View style={{paddingHorizontal: 2, paddingVertical: 9}}>
			<View style={theme == 'light' ? stylesLight.giftContainer : stylesDark.giftContainer}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<Image
						source={{
							uri: `https://heirtous.com/assets/images/gifts/${item.photo1}`
						}}
						resizeMode="contain"
						style={theme == 'light' ? stylesLight.giftImg : stylesDark.giftImg}
					/>
					<View style={{paddingLeft: 10}}>
						<View style={{marginBottom: 2}}>
							<Text style={theme == 'light' ? stylesLight.giftType : stylesDark.giftType}>{item.date_added}</Text>
						</View>
						<Text style={theme == 'light' ? stylesLight.giftName : stylesDark.giftName}>{item.type} </Text>
						<View style={{}}>
							<Text style={[theme == 'light' ? stylesLight.giftText : stylesDark.giftText, {fontSize: 9}]}>Added by</Text>
							<Text style={theme == 'light' ? stylesLight.giftText : stylesDark.giftText}>{item.username} {item.verified == 1 ? <FontAwesome name='check-circle' color={COLORS.white}  /> : ''}</Text>
						</View>
						<View style={{}}>
							<Text style={theme == 'light' ? stylesLight.giftText : stylesDark.giftText}>{item.location}</Text>
						</View>
					</View>
				</View>
				<View>
					<TouchableOpacity onPress={() => router.push({pathname: `../gift/${item.gift_id}`, params: {gift_id: item.gift_id}})}>
						<Entypo name="chevron-right" color={COLORS.white} size={25} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
export default MyGifts