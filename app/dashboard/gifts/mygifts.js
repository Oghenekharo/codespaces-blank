import React from 'react'
import {View, Text} from 'react-native'
import { useThemeContext } from '../../../context/auth'

const MyGifts = () => {
	const {theme} = useThemeContext()
   return (
		<View>
			<Text style={{fontFamily: 'DMMedium'}}>My Gifts</Text>
      </View>
   )
}

export default MyGifts