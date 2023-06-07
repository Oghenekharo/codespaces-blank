import React from 'react'
import {View, Text} from 'react-native'
import { useAuth } from '../../../context/auth'

const AddGifts = () => {
	const {credentials} = useAuth()
   const {theme} = credentials
   return (
		<View>
			<Text style={{fontFamily: 'DMMedium'}}>Add Gifts</Text>
      </View>
   )
}

export default AddGifts