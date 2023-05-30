import React, {useState, useCallback, useEffect} from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, Themes, useAuth } from "../context/auth";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	});

	const {credentials, setCredentials} = useAuth();

	useEffect(() => {
      async function prepare() {
        	try {
         	await checkLoginCredentials();
        	} catch (e) {
         	console.warn(e);
        	} finally {
				persistLogin(credentials)
			}
      }
      prepare();
   }, []);

	 const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

	const checkLoginCredentials = () => {
		AsyncStorage
			.getItem('Heirtous')
			.then((result) => {
			if(result !== null) {
				setCredentials(JSON.parse(result))
			}else{
				setCredentials(null)
			}
		})
		.catch(error => console.log(error))
	}

	const persistLogin = (credentials) => {
      AsyncStorage
      	.setItem('Heirtous', JSON.stringify(credentials))
      	.then((result) => {
      		setCredentials(credentials)
      	})
        .catch((error) => {
            console.log(error)
      	})
   }

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