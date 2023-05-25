import React from 'react'
import { Tabs } from 'expo-router'
import DrawerNav from '../authDrawers/_layout'

const Layout = () => {
  return ( 
    <Tabs screenOptions={{
		headerShown: false,
		headerTitle: 'Test'
	 }}>
    </Tabs>
  )
}

export default Layout