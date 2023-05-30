import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 60,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white,
        fontStyle: 'DMMedium'
    },
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        width: '90%',
        backgroundColor: COLORS.snow,
        borderRadius: 10,
        padding: 30,
        fontFamily: 'DMRegular',
        shadowColor: '#000',
        shadowOffset: {
		    width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
    },
    inputContainer: {
        marginHorizontal: 1,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 25
    },
    textInput: {
        borderColor: '#cdcdcd',
        padding: 10,
        paddingLeft: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#000',
        height: 50,
        fontFamily: 'DMRegular',
        width: '100%'
    },
    leftIcon: {
        position: 'absolute',
        left: 20,
        top: 23
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
        top: 23
    },
    button: {
        backgroundColor: COLORS.blue,
        padding: 13,
        borderRadius: 24,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'DMBold',

    },
    linkText: {
        textAlign: 'center',
        color: COLORS.blue,
        fontFamily: 'DMMedium',
    },
    headerText: {
        color: COLORS.gray, 
        fontSize: 18, 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        fontFamily: 'DMMedium',
    },
    darkText: {
        color: COLORS.gray,
        fontFamily: 'DMRegular',
    },
    circleLinks: {
        borderRadius: 400 / 2, 
        padding: 20, 
        backgroundColor: COLORS.blue, 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
		    width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
    },
    circleLinksText: {
        color: COLORS.blue,
        textAlign: 'center',
        fontFamily: 'DMRegular', 
    },
	 modalCenter: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	 },
   modalStyle: {
      margin: 20,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 10,
		width: '70%'
	},
	modalHeader: {
		padding: 20, 
		borderTopStartRadius: 10, 
		borderTopEndRadius: 10, 
		backgroundColor: '#fff', 
		borderBottomColor: COLORS.dimgray, 
		borderBottomWidth: 1
	},
	modalHeaderText: {
		textAlign: 'center', 
		color: COLORS.darkText, 
		textTransform: 'uppercase', 
		fontSize: 16, 
		fontFamily: 'DMBold'
	},
	modalBodyText: {
		textAlign: 'center',
		color: COLORS.dark,
		fontFamily: 'DMRegular'
	}
});

export const stylesDark = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 60,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.dark,
        fontFamily: 'DMRegular',
    },
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        width: '90%',
        backgroundColor: COLORS.lighter,
        borderRadius: 10,
        padding: 30
    },
    inputContainer: {
        marginHorizontal: 1,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10
    },
    textInput: {
        borderColor: COLORS.lightText,
        padding: 10,
        paddingLeft: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#fff',
        height: 50,
        width: '100%',
        fontFamily: 'DMRegular',
    },
    leftIcon: {
        position: 'absolute',
        left: 20,
        top: 23
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
        top: 23
    },
    button: {
        backgroundColor: COLORS.white,
        padding: 13,
        borderRadius: 24,
        width: '100%'
    },
    buttonText: {
        color: COLORS.dark,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'DMBold',

    },
    linkText: {
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: 'DMMedium',
    },
    headerText: {
        color: COLORS.white, 
        fontSize: 18, 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        fontFamily: 'DMMedium',
    },
    lightText: {
        color: COLORS.white,
        fontFamily: 'DMRegular',
    },
    circleLinks: {
        borderRadius: 400 / 2, 
        padding: 20, 
        backgroundColor: COLORS.white, 
        alignItems: 'center'
    },
    circleLinksText: {
        color: COLORS.white,
        textAlign: 'center',
        fontFamily: 'DMRegular',
    },
	 modalCenter: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
		marginTop: 10
	 },
   modalStyle: {
      margin: 20,
		backgroundColor: COLORS.lightBody,
		borderRadius: 10,
		shadowColor: COLORS.dark,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 10,
		width: '60%'
	},
	modalHeader: {
		padding: 20, 
		borderTopStartRadius: 10, 
		borderTopEndRadius: 10, 
		backgroundColor: COLORS.dark, 
		borderBottomColor: COLORS.dimgray, 
		borderBottomWidth: 1
	},
	modalHeaderText: {
		textAlign: 'center', 
		color: COLORS.lightText, 
		textTransform: 'uppercase', 
		fontSize: 16, 
		fontFamily: 'DMBold'
	},
	modalBodyText: {
		textAlign: 'center',
		color: COLORS.white,
		fontFamily: 'DMRegular'
	}
})

