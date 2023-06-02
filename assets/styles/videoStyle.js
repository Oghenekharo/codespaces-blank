import { StyleSheet } from "react-native";
import {COLORS} from '../constants/constants'

export const stylesLight = StyleSheet.create({
  videoContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  videoHeader: {
    marginVertical: 10,
    padding: 10,
    alignItems: 'flex-start'
  },
  videoInnerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%'
  },
  videoHeaderText: {
    fontFamily: 'DMBold',
    fontSize: 20,
    textAlign: 'left',
    color: COLORS.darkgray
  },
  videosContainer:{
    backgroundColor: COLORS.lightgray,
    padding: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 5
  },
  videosItemHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  videosTitle: {
    fontFamily: 'DMMedium',
    paddingBottom: 5,
    fontSize: 17,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  videosSubtitle: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  videosTime: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.darkgray,
    textAlign: 'left'
  },
  playButton: {
    borderRadius: 200 / 2,
    padding: 15,
    backgroundColor: COLORS.blue
  },
  seeAllText: {
    color: COLORS.dark,
    fontFamily: 'DMRegular'
  },
  	viewBtns: {
   	padding: 8, 
   	borderRadius: 18, 
   	backgroundColor: COLORS.blue, 
   	paddingLeft: 12, 
   	paddingRight: 12
	}
})

export const stylesDark = StyleSheet.create({
  videoContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  videoHeader: {
    marginVertical: 10,
    alignItems: 'flex-start'
  },
  videoHeaderText: {
    fontFamily: 'DMBold',
    fontSize: 20,
    textAlign: 'left',
    color: COLORS.lightgray
  },
  videosContainer:{
    backgroundColor: COLORS.darkgray,
    padding: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 5
  },
  videosItemHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  videosTitle: {
    fontFamily: 'DMMedium',
    paddingBottom: 5,
    fontSize: 17,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  videosSubtitle: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  videosTime: {
    fontFamily: 'DMRegular',
    fontSize: 13,
    color: COLORS.lightgray,
    textAlign: 'left'
  },
  playButton: {
    borderRadius: 200 / 2,
    padding: 15,
    backgroundColor: COLORS.lighter
  },
  seeAllText: {
    color: COLORS.white,
    fontFamily: 'DMRegular'
  },
  viewBtns: {
   	padding: 8, 
   	borderRadius: 18, 
   	backgroundColor: COLORS.lighter, 
   	paddingLeft: 12, 
   	paddingRight: 12
	}
})