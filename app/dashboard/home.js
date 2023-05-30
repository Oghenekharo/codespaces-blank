import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { useAuth } from "../../context/auth";

const Home = () => {
  const {credentials} = useAuth();
  return (
    <View>
      <Text>Welcome Home Page</Text>
    </View>
  )
}

export default Home