import { useRouter, useSegments } from "expo-router";
import React, {useState} from "react";

const AuthContext = React.createContext({
	credentials: {},
	setCredentials: () => {},
  clearCredentials: () => {}
});
const ThemeContext = React.createContext({
	theme: 'light',
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
      router.replace("/dashboard");
    }
  }, [user, segments]);
}


export function Provider(props) {
  const [credentials, setCredentials] = useState();

  useProtectedRoute(credentials);

  return (
    <AuthContext.Provider
      value={{
        credentials, 
        setCredentials,
        clearCredentials: () => useAuth(null)
      }}
    >
		{props.children}
    </AuthContext.Provider>
  );
}

export function Themes(props){
  const [theme, setTheme] = useState('light');
 	const value = {theme, setTheme}
	return (
		<ThemeContext.Provider
			value={value}
		>
			{props.children}
		</ThemeContext.Provider>
	)
}