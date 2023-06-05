import { StyleSheet } from "react-native";
import {COLORS} from '../../../assets/constants/constants'

export const stylesLight = StyleSheet.create({
    page : {
        backgroundColor: COLORS.white,
        // flex: 1,
        height: '100%'
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
       width: '80%'
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
   },
    textInputContainer: {
        width: '100%',
        padding: 10,
    },
    inputContainer: {
        padding: 10,
        flexDirection: 'row',
        marginBottom: 15,
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
    button: {
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 30,
        width: '80%',
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
})

export const stylesDark = StyleSheet.create({
    page : {
        backgroundColor: COLORS.dark,
        // flex: 1,
        height: '100%'
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
		width: '80%'
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
	},
    textInputContainer: {
        width: '100%',
        padding: 10
    },
    inputContainer: {
        padding: 10,
        flexDirection: 'row',
        marginBottom: 15,
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
    button: {
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 30,
        width: '80%',
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
        color: COLORS.dark,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'DMBold',

    },
})