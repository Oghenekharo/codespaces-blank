import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
  audioContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  audioHeader: {
    marginVertical: 10,
    padding: 10,
    alignItems: 'flex-start'
  },
  audioInnerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%'
  },
  audioHeaderText: {
    fontFamily: 'DMBold',
    fontSize: 20,
    textAlign: 'left',
    color: COLORS.darkgray
  },
  audiosContainer:{
    backgroundColor: COLORS.lightgray,
    padding: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 5
  },
  audiosItemHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  audiosTitle: {
    fontFamily: 'DMMedium',
    paddingBottom: 5,
    fontSize: 17,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  audiosSubtitle: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  audiosTime: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  playButton: {
    borderRadius: 200 / 2,
    padding: 10,
    backgroundColor: COLORS.blue
  },
  seeAllText: {
    color: COLORS.dark,
    fontFamily: 'DMRegular'
  }
})

export const stylesDark = StyleSheet.create({
  audioContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  audioHeader: {
    marginVertical: 10,
    alignItems: 'flex-start'
  },
  audioHeaderText: {
    fontFamily: 'DMBold',
    fontSize: 20,
    textAlign: 'left',
    color: COLORS.lightgray
  },
  audiosContainer:{
    backgroundColor: COLORS.darkgray,
    padding: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 5
  },
  audiosItemHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  audiosTitle: {
    fontFamily: 'DMMedium',
    paddingBottom: 5,
    fontSize: 17,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  audiosSubtitle: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  audiosTime: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  playButton: {
    borderRadius: 200 / 2,
    padding: 10,
    backgroundColor: COLORS.lighter
  },
  seeAllText: {
    color: COLORS.white,
    fontFamily: 'DMRegular'
  }
})