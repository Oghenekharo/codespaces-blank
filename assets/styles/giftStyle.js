import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const stylesLight = StyleSheet.create({
    page : {
        backgroundColor: COLORS.snow,
        height: 800,
        paddingHorizontal: 20
    },
    giftContainer: {
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
      giftImg: {
          borderRadius: 200 / 2,
          borderColor: COLORS.white,
          borderWidth: 2,
          height: 50,
          width: 50
      },
      giftType: {
          textAlign: 'left', 
          fontFamily: 'DMRegular', 
          fontSize: 12, 
          color: COLORS.lightgray
      },
      giftName: {
          textAlign: 'left', 
          fontFamily: 'DMBold', 
          fontSize: 19, 
          marginBottom: 15, 
          color: COLORS.white
      },
      giftText: {
          fontFamily: 'DMRegular',
          color: COLORS.white,
          paddingBottom: 3,
      }
})

export const stylesDark = StyleSheet.create({
    page : {
        backgroundColor: COLORS.lightBody,
        height: '100%',
        paddingHorizontal: 20
    },
    giftContainer: {
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
      giftImg: {
          borderRadius: 200 / 2,
          borderColor: COLORS.white,
          borderWidth: 2,
          height: 50,
          width: 50
      },
      giftType: {
          textAlign: 'left', 
          fontFamily: 'DMRegular', 
          fontSize: 12, 
          color: COLORS.lightgray
      },
      giftName: {
          textAlign: 'left', 
          fontFamily: 'DMBold', 
          fontSize: 19, 
          marginBottom: 15, 
          color: COLORS.white
      },
      giftText: {
          fontFamily: 'DMRegular',
          color: COLORS.white,
          paddingBottom: 3
      }
})