import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Drawers from '../../assets/components/drawers'
import {COLORS} from '../../assets/constants/constants'
import { useAuth } from "../../context/auth";

const HomeLayout = () => {
  const {credentials} = useAuth()
  const {theme} = credentials
  return (
    <Drawer 
        screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
              width: 280,
            }
        }}
        drawerContent={(props) => {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <Drawers />
            </SafeAreaView>
          );
        }}
    />
  )
}

export default HomeLayout