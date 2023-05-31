import React, {useState, useCallback, useEffect} from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider, Themes, useAuth } from "../context/auth";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	});

	 const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
	}else{
	return (
		<Provider>
      	<Themes>
				<SafeAreaProvider>
					<Stack onLayout={onLayoutRootView}>
						<Stack.Screen 
							name='index'
							options={{
								headerShown: false,
								headerStyle: {
									backgroundColor: 'white',
								}
							}}
						/>
						<Stack.Screen 
							name='(auth)'
							options={{
								headerShown: false,
								headerStyle: {
									backgroundColor: 'white',
								}
							}}
						/>
					</Stack>
				</SafeAreaProvider>
			</Themes>
    	</Provider>
  	)
	}
}

export default RootLayout