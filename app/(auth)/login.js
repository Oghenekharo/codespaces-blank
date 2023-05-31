import React, {useState} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, TextInput, SafeAreaView, StatusBar, ScrollView} from 'react-native'
import { Link } from 'expo-router'
import { Entypo, MaterialIcons, Fontisto, Foundation } from '@expo/vector-icons';
import { stylesLight, stylesDark} from '../../assets/styles/authStyle'
import {COLORS} from '../../assets/constants/constants'
import { useRouter } from 'expo-router';
import Toggler from '../toggle';
import { useThemeContext, useAuth } from "../../context/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MyModal from '../../assets/components/modal';

const Login = () => {
	//Useful Varialbles
	const router = useRouter()
	const [isPassword, setIsPassword] = useState(true)
	const {credentials, setCredentials} = useAuth()
	const [message, setMessage] = useState('');
	const [messageType, setMessageType] = useState('')
	const {theme} = useThemeContext();

	//Modal content visibility
	const [modalVisible, setModalVisible] = useState(false);

	//Getting username and passwords
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	//Setting the alert message Properties
	const handleMessage = (type, message) =>{
		setMessage(message)
		setMessageType(type)
	}

	//Login user Function
	const LoginUser = () => {
		setIsSubmitting(true)
		if(username == '' || password == ''){
			setModalVisible(true)
			handleMessage('alert', 'Please fill all fields')
			setIsSubmitting(false)
		} else if(username.length < 2){
			setModalVisible(true)
			handleMessage('alert', 'Username cannot be less than 3 characters')
			setIsSubmitting(false)
		}else if(password.length < 5){
			setModalVisible(true)
			handleMessage('alert', 'Password cannot be less than 5 characters')
			setIsSubmitting(false)
		}else{
			const url = 'https://joenicehmp.com/l3git/dbo/login.php';

			//Creating a formData Object

			let formData = new FormData();

			let res = {}
			
			formData.append('username', username);
			formData.append('password', password);

			//Config to allow posting of formData
			const config = {
            headers: {'Content-Type': 'multipart/form-data'},
        	};

			axios
				.post(url, formData, config)
				.then(async (response) => {
					const result = response.data;
					if(result.message == 'success'){
						res = {
							u_id: result.u_id,
                    	fullname: result.fullname,
                    	token: result.token,
                    	username: result.username,
                    	email: result.email,
                    	gender: result.gender,
                    	phone: result.phone,
                    	photo: result.photo,
                    	dob: result.dob
                	}
						setModalVisible(true)
						handleMessage('success',"Login successful")
                	setTimeout(function(){
							persistLogin({...res})
                	}, 200);
					}else{
						setModalVisible(true)
						handleMessage('alert', result.message)
						setIsSubmitting(false)
					}
				})
				.catch((error) => {
					setModalVisible(true)
					handleMessage('error', `An error occured ${error}`)
					setIsSubmitting(false)
				})
		}
	}

	const persistLogin = (credentials) => {
      AsyncStorage
      	.setItem('Heirtous', JSON.stringify(credentials))
      	.then((result) => {
      		setCredentials(credentials);
      	})
        .catch((error) => {
            console.log(error)
      	})
   }

	if(credentials != null) {
		return <ActivityIndicator size="large" color={theme == 'light' ? COLORS.dark : COLORS.white} />
	}
  	return (
   	<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<StatusBar 
					barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
				/>
				<View style={{alignItems: 'center'}}>
					<Toggler />
					<View style={{margin: 10}}>
						{
							theme == 'light' ?
							<Fontisto  name='day-sunny' color={COLORS.dark} size={20} />
							:
							<MaterialIcons name='nightlight-round' color={COLORS.white} size={20} />
						}
					</View>
				</View>
				
				<View style={{margin: 10, paddingLeft: 30, marginTop: 50}}>
					<Text style={[{fontSize: 25, fontFamily: 'DMBold'}, theme == 'light' ? stylesLight.darkText : stylesDark.lightText]}>Welcome Back</Text>
					<Text style={[{fontSize: 15, fontWeight: 'light', marginTop: 10, fontFamily: 'DMRegular'}, theme == 'light' ? stylesLight.darkText : stylesDark.lightText]}>Login to continue</Text>
				</View>
				<View>
					<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
						<View style={theme == 'light' ? stylesLight.textInputContainer : stylesDark.textInputContainer }>
							<Text style={theme == 'light' ? stylesLight.headerText : stylesDark.headerText}>Login</Text>
							<View style={theme == 'light' ? stylesLight.inputContainer : stylesDark.inputContainer}>
								<View style={theme == 'light' ? stylesLight.leftIcon : stylesDark.leftIcon}>
									<Entypo name="user" color={theme == 'light' ? COLORS.dimgray : COLORS.white} size={20} />
								</View>
								<TextInput
									style={theme == 'light' ? stylesLight.textInput : stylesDark.textInput}
									placeholderTextColor={theme == 'light' ? COLORS.dimgray : COLORS.white}
									placeholder='Username'
									value={username}
									onChangeText={(text) => setUsername(text)}
								/>
							</View>
							<View style={theme == 'light' ? stylesLight.inputContainer : stylesDark.inputContainer}>
								<View style={theme == 'light' ? stylesLight.leftIcon : stylesDark.leftIcon}>
									<Entypo name="lock" color={theme == 'light' ? COLORS.dimgray : COLORS.white} size={20} />
								</View>
								<TextInput
									style={theme == 'light' ? stylesLight.textInput : stylesDark.textInput}
									placeholderTextColor={theme == 'light' ? COLORS.dimgray : COLORS.white}
									placeholder='Password'
									secureTextEntry={isPassword}
									value={password}
									onChangeText={(text) => setPassword(text)}
								/>
								<TouchableOpacity onPress={() => setIsPassword(!isPassword)} style={stylesLight.rightIcon}>
									<Entypo name={isPassword == true ? 'eye' : 'eye-with-line'} color={theme == 'light' ? COLORS.dimgray : COLORS.white} size={25} />
								</TouchableOpacity>
							</View>
							<Link style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText} href="/authDrawers/about">Forgot Password?</Link>
							<View style={theme == 'light' ? stylesLight.inputContainer : stylesDark.inputContainer}>
								<TouchableOpacity onPress={() => LoginUser()} style={theme == 'light' ? stylesLight.button : stylesDark.button}>
									{isSubmitting == false 
									? <Text style={theme == 'light' ? stylesLight.buttonText : stylesDark.buttonText}>Login</Text>
									:
									<ActivityIndicator size="small" color={theme == 'light' ? COLORS.white : COLORS.blue} />
									}
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={{margin: 10, padding: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{}}>
							<TouchableOpacity onPress={() => router.push('/authDrawers/about')}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Entypo name='info' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>About</Text>
							</TouchableOpacity>
						</View>
						<View style={{}}>
							<TouchableOpacity onPress={() => router.push('/authDrawers/contact')}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Entypo name='phone' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>Contact</Text>
							</TouchableOpacity>
						</View>
						<View style={{}}>
							<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Foundation name='comments' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>Requests</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
			<MyModal 
				message={message}
				visible={modalVisible} 
				setModalVisible={setModalVisible}
				type={messageType}
			/>
		</ScrollView>
  )
}

export default Login