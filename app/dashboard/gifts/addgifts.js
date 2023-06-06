import React from 'react'
import {View, Text} from 'react-native'
import { useThemeContext } from '../../../context/auth'

const AddGifts = () => {
	const {theme} = useThemeContext()
   return (
		<View>
			<Text style={{fontFamily: 'DMMedium'}}>Add Gifts</Text>
      </View>
   )
}

export default AddGifts