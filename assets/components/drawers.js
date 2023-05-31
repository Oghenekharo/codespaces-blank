import {View, Text, TouchableOpacity} from 'react-native'
import {useRouter} from 'expo-router'
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../styles/drawerStyle'
import Toggler from '../../app/toggle';
import { COLORS } from '../constants/constants';

const Drawers = () => {

  const {credentials, clearCredentials} = useAuth();
  const {theme} = useThemeContext()

  if(credentials === null){
    return null;
  }else{
    const router = useRouter();
    const {fullname, photo, u_id, username} = credentials;
    return (
        <View style={{marginTop: 50, padding: 5}}>
            <View
              style={theme == 'light' ? stylesLight.headerCover : stylesDark.headerCover }
            >
            <Text style={theme == 'light' ? stylesLight.headerName : stylesDark.headerName}>{fullname}</Text>
            </View>
            
            <View style={stylesLight.drawerButtonsContainer}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => router.push('./')} style={{flexDirection: 'row'}}>
                  <Ionicons name="person" size={20} color={theme == 'light' ? COLORS.blue : COLORS.lightText} style={{paddingRight: 30}} />
                  <Text style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText}>Dashboard</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 40}}>
                <TouchableOpacity onPress={clearCredentials} style={{flexDirection: 'row'}}>
                  <FontAwesome name="sign-out" size={20} color={theme == 'light' ? COLORS.blue : COLORS.lightText} style={{paddingRight: 30}} />
                  <Text style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText}>Logout</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 60}}>
                <View style={{flexDirection: 'row'}}>
                  <Toggler />
                </View>
              </View>
            </View>
            </View>
    )
  }
}

export default Drawers;