import React from 'react'
import {View, Text} from 'react-native'
import { useThemeContext } from '../../../context/auth'

const AllGifts = () => {
	const {theme} = useThemeContext()
   return (
		<View>
			<Text style={{fontFamily: 'DMMedium'}}>All Gifts</Text>
      </View>
   )
}

export default AllGifts