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
    }
})