import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../styles/videoStyle';
import { Entypo, Feather, Fontisto, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/constants';

const VideoPlayer = () => {
   const {theme} = useThemeContext()
   const files = [1, 2, 3, 4, 5, 6, 7]
   const loadMp3 = () => {

   }
   return (
      <View style={theme == 'light' ? stylesLight.videoContainer : stylesDark.videoContainer}>
         <View style={theme == 'light' ? stylesLight.videoHeader : stylesDark.videoHeader}>
            <View style={stylesLight.videoInnerHeader}>
               <View>
                  <Text style={theme == 'light' ? stylesLight.videoHeaderText : stylesDark.videoHeaderText}>Video Files</Text>
               </View>
               <View>
                  <TouchableOpacity>
                     <Text style={theme == 'light' ? stylesLight.seeAllText : stylesDark.seeAllText}>See all</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
			{files.map((item, index) => (
            <Videos
               title={item} 
               key={index}
            />
         ) )}
      </View>
   )
}

const Videos = ({title}) => {
   const {theme} = useThemeContext()
   return (
      <View style={theme == 'light' ? stylesLight.videosContainer : stylesDark.videosContainer}>
         <View style={theme == 'light' ? stylesLight.videosItemHolder : stylesDark.videosItemHolder}>
            <View style={theme == 'light' ? stylesLight.playButton : stylesDark.playButton}>
               <TouchableOpacity>
                  <Entypo name="video" color={theme == 'light' ? COLORS.lightgray : COLORS.white} size={20} />
               </TouchableOpacity>
            </View>
				<View>
               <Text style={theme == 'light' ? stylesLight.videosTitle : stylesDark.videosTitle}>Praise that work {title}</Text>
               <Text style={theme == 'light' ? stylesLight.videosSubtitle : stylesDark.videosSubtitle}>By Samuel Vic</Text>
            </View>
            <View style={{paddingTop: 7}}>
               <TouchableOpacity style={theme == 'light' ? stylesLight.viewBtns : stylesDark.viewBtns}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
							<Entypo name="eye" color={COLORS.lightgray} size={20} />
							<Text style={{paddingLeft: 8, paddingTop: 2, color: COLORS.lightgray, fontFamily: 'DMRegular'}}>View</Text>
						</View>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default VideoPlayer