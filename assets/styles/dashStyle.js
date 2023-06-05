import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
    page: {
        flex: 1,
        padding: 15,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white,
        fontFamily: 'DMMedium'
    },
    container: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
        fontSize: 25,
        fontFamily: 'DMBold'
    },
	 searchCover: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		marginVertical: 20,
    },
    searchContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row'
    },
	 searchBtn: {
		backgroundColor: COLORS.blue,
		padding: 15,
		borderRadius: 10
	 },
    textInput: {
      borderColor: '#cdcdcd',
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      color: '#000',
      height: 50,
      fontFamily: 'DMRegular',
      width: '90%',
		marginRight: 12
    },
    serviceContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      width: '100%', 
      borderRadius: 10, 
      backgroundColor: COLORS.lighterblue, 
      padding: 15,
		shadowColor: '#000',
        shadowOffset: {
		    width: 0,
			height: 2,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4,
		elevation: 5,
    },
    serviceImg: {
		borderRadius: 200 / 2,
		borderColor: COLORS.white,
		borderWidth: 2,
		height: 50,
		width: 50
	},
	serviceType: {
		textAlign: 'left', 
		fontFamily: 'DMRegular', 
		fontSize: 12, 
		color: COLORS.lightgray
	},
	serviceName: {
		textAlign: 'left', 
		fontFamily: 'DMBold', 
		fontSize: 19, 
		marginBottom: 15, 
		color: COLORS.white
	},
	serviceText: {
		fontFamily: 'DMRegular',
		color: COLORS.white,
		paddingBottom: 3,
	}
})

export const stylesDark = StyleSheet.create({
  page: {
    flex: 1,
    padding: 15,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.dark,
    fontFamily: 'DMMedium'
  },
    container: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
        fontSize: 25,
        fontFamily: 'DMBold',
        color: COLORS.lightText
    },
	 searchCover: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		marginVertical: 20,
    },
    searchContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row'
    },
	 searchBtn: {
		backgroundColor: COLORS.dimgray,
		padding: 15,
		borderRadius: 10
	 },
    textInput: {
      borderColor: COLORS.lightText,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      color: COLORS.dimgray,
      height: 50,
      fontFamily: 'DMRegular',
      width: '90%',
      marginRight: 12
    },
    serviceContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      width: '100%', 
      borderRadius: 10, 
      backgroundColor: COLORS.darkgray, 
      padding: 15,
		shadowColor: '#000',
        shadowOffset: {
		    width: 0,
			height: 2,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4,
		elevation: 5,
    },
    serviceImg: {
		borderRadius: 200 / 2,
		borderColor: COLORS.white,
		borderWidth: 2,
		height: 50,
		width: 50
	},
	serviceType: {
		textAlign: 'left', 
		fontFamily: 'DMRegular', 
		fontSize: 12, 
		color: COLORS.lightgray
	},
	serviceName: {
		textAlign: 'left', 
		fontFamily: 'DMBold', 
		fontSize: 19, 
		marginBottom: 15, 
		color: COLORS.white
	},
	serviceText: {
		fontFamily: 'DMRegular',
		color: COLORS.white,
		paddingBottom: 3
	}
})