import { useRouter, useSegments } from "expo-router";
import React, {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext({
	credentials: {},
	setCredentials: () => {},
  clearCredentials: () => {}
});

const ThemeContext = React.createContext({
	theme: '',
	setTheme: () => {}
})

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

export function useThemeContext(){
	return React.useContext(ThemeContext)
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user && !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      if(user.userstatus == 1){
        router.push('/dashboard')
      }
    }
  }, [user, segments]);
}

export function Provider(props) {
  
  const [credentials, setCredentials] = useState({});
  const router = useRouter()
  
  const clearCredentials = () => {
    AsyncStorage.removeItem('Heirtous')
      .then(() => {
          router.replace('/(auth)/login')
          setCredentials(null)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
      async function prepare() {
        	try {
         	  await checkLoginCredentials();
        	} catch (e) {
         	  console.warn(e);
        	}
      }
      prepare();
   }, []);

  const checkLoginCredentials = () => {
		AsyncStorage
			.getItem('Heirtous')
			.then((result) => {
			if(result != null) {
				setCredentials(JSON.parse(result))
			}else{
				setCredentials(null)
			}
		})
		.catch(error => console.log(error))
	}

  useProtectedRoute(credentials);

  return (
    <AuthContext.Provider
      value={{
        credentials, 
        setCredentials,
        clearCredentials
      }}
    >
		{props.children}
    </AuthContext.Provider>
  );
}

export function Themes(props){
  const [theme, setTheme] = useState('');
 	const value = {theme, setTheme}
	return (
		<ThemeContext.Provider
			value={value}
		>
			{props.children}
		</ThemeContext.Provider>
	)
}