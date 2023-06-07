import React from 'react'
import {View, Text, TouchableOpacity, Modal} from 'react-native'
import { useThemeContext } from "../../context/auth";
import { stylesLight, stylesDark} from '../styles/authStyle'
import {COLORS} from '../constants/constants'
import { Entypo } from '@expo/vector-icons';

const MyModal = ({message, visible, setModalVisible, type}) => {
   	const {theme} = useThemeContext()
	return (
   	<Modal
			visible={visible}
			animationType="fade"
			animationInTiming={2000}
			animationOutTiming={2000}
			transparent={true}
		>
			<View style={theme == 'light' ? stylesLight.modalCenter : stylesDark.modalCenter}>
				<View style={theme == 'light' ? stylesLight.modalStyle : stylesDark.modalStyle}>
					<View style={theme == 'light' ? stylesLight.modalHeader : stylesDark.modalHeader}>
						<Text style={theme == 'light' ? stylesLight.modalHeaderText : stylesDark.modalHeaderText}>
							{ type == 'alert' ? 'Alert!' : type == 'error' ? 'Error!' : type == 'success' ? 'Success' : 'info' }
						</Text>
                  <TouchableOpacity
      	            style={{position: 'absolute', right: 20, top: 15}}
         	         onPress={
                        () => {setModalVisible(!visible) }
                     }
						>
                     <Entypo name="cross" size={28} color={theme == 'light' ? COLORS.dark : COLORS.lightText} />
                  </TouchableOpacity>
					</View>
					<View style={{padding: 20}}>
						<Text style={theme == 'light' ? stylesLight.modalBodyText : stylesDark.modalBodyText}>{message}</Text>
					</View>
				</View>
			</View>
		</Modal>
  	)
}

export default MyModal