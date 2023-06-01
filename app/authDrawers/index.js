import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useThemeContext, useAuth } from "../../context/auth";
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const index = () => {
	const {credentials, clearCredentials} = useAuth();
  return (
	 <View>
	 	<Text>Welcome Index</Text>
		<TouchableOpacity onPress={clearCredentials} style={{flexDirection: 'row'}}>
                  <FontAwesome name="sign-out" size={20} color='red' style={{paddingRight: 30}} />
                  <Text>Logout</Text>
                </TouchableOpacity>
	 </View>
  )
}

export default index