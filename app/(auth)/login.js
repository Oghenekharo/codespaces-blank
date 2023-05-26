import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, TextInput, SafeAreaView, StatusBar, ScrollView} from 'react-native'
import { Link } from 'expo-router'
import { Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { stylesLight, stylesDark} from '../../assets/styles/authStyle'
import {COLORS, SITE_NAME} from '../../assets/constants/constants'
import { useRouter } from 'expo-router';
import Toggler from '../toggle';
import { useThemeContext } from "../../context/auth";

const Login = () => {
	const router = useRouter()
	const [isPassword, setIsPassword] = useState(true)
	const {theme} = useThemeContext();
	// useEffect(() => {
	// }, [theme]);
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
					<Text style={[{fontSize: 25, fontWeight: 'bold'}, theme == 'light' ? stylesLight.darkText : stylesDark.lightText]}>Welcome Back</Text>
					<Text style={[{fontSize: 15, fontWeight: 'light', marginTop: 10}, theme == 'light' ? stylesLight.darkText : stylesDark.lightText]}>Login to continue</Text>
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
								/>
								<TouchableOpacity onPress={() => setIsPassword(!isPassword)} style={stylesLight.rightIcon}>
									<Entypo name={isPassword == true ? 'eye' : 'eye-with-line'} color={theme == 'light' ? COLORS.dimgray : COLORS.white} size={20} />
								</TouchableOpacity>
							</View>
							<Link style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText} href="/authDrawers/about">Forgot Password?</Link>
							<View style={theme == 'light' ? stylesLight.inputContainer : stylesDark.inputContainer}>
								<TouchableOpacity style={theme == 'light' ? stylesLight.button : stylesDark.button}>
									<Text style={theme == 'light' ? stylesLight.buttonText : stylesDark.buttonText}>Login</Text>
								</TouchableOpacity>
							</View>
							{/* <TouchableOpacity onPress={() => toggleTheme()} style={stylesLight.button}>
									<Text style={stylesLight.buttonText}>Toggle</Text>
								</TouchableOpacity> */}
						</View>
					</View>
					<View style={{margin: 10, padding: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{}}>
							<TouchableOpacity onPress={() => router.replace('/authDrawers/about')}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Entypo name='info' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>About</Text>
							</TouchableOpacity>
						</View>
						<View style={{}}>
							<TouchableOpacity onPress={() => router.replace('/authDrawers/contact')}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Entypo name='phone' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>Contact</Text>
							</TouchableOpacity>
						</View>
						<View style={{}}>
							<TouchableOpacity onPress={() => router.replace('/authDrawers/index')}>
								<View style={theme == 'light' ? stylesLight.circleLinks : stylesDark.circleLinks}>
									<Entypo name='phone' color={theme == 'light' ? COLORS.white : COLORS.dark} size={20} />
								</View>
								<Text style={theme == 'light' ? stylesLight.circleLinksText : stylesDark.circleLinksText}>Contact</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
  )
}

export default Login