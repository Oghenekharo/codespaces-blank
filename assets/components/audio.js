import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../styles/audioStyle';
import { Entypo, Feather, Fontisto, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/constants';

const AudioPlayer = () => {
   const {credentials} = useAuth()
   const {theme} = credentials
   const files = [1, 2, 3, 4, 5, 6, 7]
   const loadMp3 = () => {

   }
   return (
      <View style={theme == 'light' ? stylesLight.audioContainer : stylesDark.audioContainer}>
         <View style={theme == 'light' ? stylesLight.audioHeader : stylesDark.audioHeader}>
            <View style={stylesLight.audioInnerHeader}>
               <View>
                  <Text style={theme == 'light' ? stylesLight.audioHeaderText : stylesDark.audioHeaderText}>Audio Files</Text>
               </View>
               <View>
                  <TouchableOpacity>
                     <Text style={theme == 'light' ? stylesLight.seeAllText : stylesDark.seeAllText}>See all</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
			{files.map((item, index) => (
            <Audios
               title={item} 
               key={index}
            />
         ) )}
      </View>
   )
}

const Audios = ({title}) => {
   const {credentials} = useAuth()
	const {theme} = credentials
   return (
      <View style={theme == 'light' ? stylesLight.audiosContainer : stylesDark.audiosContainer}>
         <View style={theme == 'light' ? stylesLight.audiosItemHolder : stylesDark.audiosItemHolder}>
            <View>
               <Text style={theme == 'light' ? stylesLight.audiosTitle : stylesDark.audiosTitle}>Worship Jesus {title}</Text>
               <Text style={theme == 'light' ? stylesLight.audiosSubtitle : stylesDark.audiosSubtitle}>By James Kennedy</Text>
            </View>
               <View style={{paddingTop: 15}}>
                  <Text style={theme == 'light' ? stylesLight.audiosTime : stylesDark.audiosTime}>{title + 1}:05</Text>
               </View>
               <View style={theme == 'light' ? stylesLight.playButton : stylesDark.playButton}>
                  <TouchableOpacity>
                     <Entypo name="controller-play" color={theme == 'light' ? COLORS.lightgray : COLORS.white} size={20} />
                  </TouchableOpacity>
               </View>
            </View>
         </View>
   )
}

export default AudioPlayer