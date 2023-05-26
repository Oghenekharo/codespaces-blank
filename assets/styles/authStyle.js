import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 60,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white
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
        borderColor: '#cdcdcd',
        padding: 10,
        paddingLeft: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#000',
        height: 50,
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
        padding: 18,
        borderRadius: 30,
        width: '100%',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'

    },
    linkText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.dark
    },
    headerText: {
        color: COLORS.gray, 
        fontSize: 18, 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        fontWeight: 'bold'
    },
    darkText: {
        color: COLORS.gray
    },
    circleLinks: {
        borderRadius: 400 / 2, 
        padding: 15, 
        backgroundColor: COLORS.blue, 
        alignItems: 'center'
    },
    circleLinksText: {
        color: COLORS.blue,
        textAlign: 'center', 
    }
});

export const stylesDark = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 60,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.dark
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
        backgroundColor: COLORS.white,
        padding: 18,
        borderRadius: 30,
        width: '100%'
    },
    buttonText: {
        color: COLORS.dark,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'

    },
    linkText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.lightText
    },
    headerText: {
        color: COLORS.white, 
        fontSize: 18, 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        fontWeight: 'bold'
    },
    lightText: {
        color: COLORS.white
    },
    circleLinks: {
        borderRadius: 400 / 2, 
        padding: 15, 
        backgroundColor: COLORS.white, 
        alignItems: 'center'
    },
    circleLinksText: {
        color: COLORS.white,
        textAlign: 'center', 
    }
})

