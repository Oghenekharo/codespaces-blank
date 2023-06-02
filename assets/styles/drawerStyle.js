import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
    headerCover:{
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
		  borderBottomColor: '#ccc',
		  borderBottomWidth: 1
    },
	 headerName:{
		fontSize: 30, 
		fontFamily: 'DMBold', 
		marginBottom: 70,
		color: COLORS.lighter
	},
	drawerButtonsContainer: {
		marginTop: 10,
		marginLeft: 20
	},
	linkText: {
		paddingRight: 20, 
		fontSize: 16,
		fontFamily: 'DMMedium',
		color: COLORS.lighter
	}
})

export const stylesDark = StyleSheet.create({
    headerCover:{
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
		  borderBottomColor: '#ccc',
		  borderBottomWidth: 1
    },
	 headerName:{
		fontSize: 30, 
		fontFamily: 'DMBold', 
		marginBottom: 70,
		color: COLORS.lightText
	},
	drawerButtonsContainer: {
		marginTop: 20,
		marginLeft: 20
	},
	linkText: {
		paddingRight: 20, 
		fontSize: 16,
		fontFamily: 'DMMedium',
		color: COLORS.lightText
	}
})