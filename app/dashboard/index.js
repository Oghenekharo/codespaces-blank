import React from 'react'
import {View, Text} from 'react-native'
import { useThemeContext, useAuth } from "../../context/auth";

const Dashboard = () => {
  const {credentials} = useAuth();
  const {username} = credentials
  return (
    <View><Text>Helo {username}</Text></View>
  )
}

export default Dashboard