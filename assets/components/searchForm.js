import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { COLORS } from '../constants/constants'
import {Feather} from '@expo/vector-icons'
import {useRouter} from 'expo-router'
import { stylesLight, stylesDark } from '../styles/dashStyle'
import { useAuth } from '../../context/auth'

const SearchForm = ({query}) => {
	const {credentials} = useAuth()
   	const {theme} = credentials
	const router = useRouter()
	const [searchKey, setSearchKey] = useState('')
	const [placeholderText, setPlaceHolderText] = useState('')
	
	const loadPage = () => {
		switch(query){
			case 'services':
				setPlaceHolderText('Search Community')
				break;
			case 'gifts':
				setPlaceHolderText('Search Gifts')
				break;
			default:
				setPlaceHolderText('Search Community')
			break;
		}
	}

	const handleSearch = () =>{
		switch(query){
			case 'services':
				if(searchKey == null || searchKey == ""){
					alert('Please enter a search keyword')
				}else{
					if(searchKey.length >= 5){
						router.push(`/dashboard/searchservice/${searchKey}`)
						setSearchKey("")
					}else{
						alert('Enter at least 5 characters')
					}
				}
				break;
			case 'gifts':
				setPlaceHolder('Search Gifts')
				break;
			default:
				setPlaceHolder('Search Community')
			break;
		}
	}

	useEffect(() => {
		loadPage();
	})
	return (
		<View style={theme == 'light' ? stylesLight.searchCover : stylesDark.searchCover}>
			<View style={theme == 'light' ? stylesLight.searchContainer : stylesDark.searchContainer}>
				<TextInput
					style={theme == 'light' ? stylesLight.textInput : stylesDark.textInput}
					placeholderTextColor={theme == 'light' ? COLORS.dimgray : COLORS.white}
					placeholder={placeholderText}
					value={searchKey}
					onChangeText={(text) => setSearchKey(text)}
				/>
				
				<TouchableOpacity onPress={handleSearch} style={theme == 'light' ? stylesLight.searchBtn : stylesDark.searchBtn}>
					<Feather name="search" color={theme == 'light' ? COLORS.white : COLORS.lightText } size={20} />
				</TouchableOpacity> 
			</View>
		</View>
	)
}

export default SearchForm