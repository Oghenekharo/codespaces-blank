import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
    headerCover:{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
		  borderBottomColor: '#ccc',
		  borderBottomWidth: 1
    },
	 headerName:{
		fontSize: 30, 
		fontFamily: 'DMBold', 
		marginBottom: 30,
		color: COLORS.lighter
	},
	drawerButtonsContainer: {
		marginTop: 20,
		marginLeft: 20
	},
	linkText: {
		paddingRight: 50, 
		fontSize: 16,
		fontFamily: 'DMMedium',
		color: COLORS.lighter
	}
})

export const stylesDark = StyleSheet.create({
    headerCover:{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
		  borderBottomColor: '#ccc',
		  borderBottomWidth: 1
    },
	 headerName:{
		fontSize: 30, 
		fontFamily: 'DMBold', 
		marginBottom: 30,
		color: COLORS.lightText
	},
	drawerButtonsContainer: {
		marginTop: 20,
		marginLeft: 20
	},
	linkText: {
		paddingRight: 50, 
		fontSize: 16,
		fontFamily: 'DMMedium',
		color: COLORS.lightText
	}
})