import { Redirect } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const Root = () => {
  return (
    <Redirect href={{pathname: '(auth)/login'}} />
  )
}

export default Root