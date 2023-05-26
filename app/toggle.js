import Toggle from 'react-native-toggle-input'
import { useThemeContext } from "../context/auth";
import {useState} from 'react'

const Toggler = () => {
	const [toggle, setToggle] = useState(false);
	const {setTheme} = useThemeContext();
		if (!toggle) {
			setTheme('light');
		} else {
			setTheme('dark');
		}

    return (
		<Toggle
			color={"#4C956C"}
			size={20}
			filled={true}
			circleColor={"white"}
			toggle={toggle}
			setToggle={setToggle}
			toggleTheme={() => toggleTheme} 
		/>
	 )
}

export default Toggler