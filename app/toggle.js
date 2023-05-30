import Toggle from 'react-native-toggle-input'
import { useThemeContext } from "../context/auth";
import {useState, useEffect} from 'react'

const Toggler = () => {
	const [toggle, setToggle] = useState(false);
	const {setTheme} = useThemeContext();
	
	useEffect(() => {
		if (!toggle) {
			setTheme('light');
		} else {
			setTheme('dark');
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