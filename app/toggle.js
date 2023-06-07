import Toggle from 'react-native-toggle-input'
import { useThemeContext, useAuth } from "../context/auth";
import {useState, useEffect} from 'react'

const Toggler = () => {
	const [toggle, setToggle] = useState(false);
	const {credentials, setCredentials} = useAuth()
	const {theme, setTheme} = useThemeContext();
	
	useEffect(() => {
		if (toggle) {
			setTheme('dark');
			if(credentials != null){
				setCredentials({...credentials, theme: 'dark'})
			}
		} else {
			setTheme('light');
			if(credentials != null){
				setCredentials({...credentials, theme: 'light'})
			}
		}
	}, [toggle])

    return (
		<Toggle
			color={"#ffffff"}
			size={20}
			filled={true}
			circleColor={"#363638"}
			toggle={toggle}
			setToggle={setToggle}
		/>
	 )
}

export default Toggler