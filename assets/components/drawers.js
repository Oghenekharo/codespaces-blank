import {View, Text, TouchableOpacity, Image} from 'react-native'
import {useRouter} from 'expo-router'
import {Ionicons, FontAwesome, MaterialIcons} from '@expo/vector-icons';
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
        <View style={{marginTop: 40, padding: 5}}>
            <View
              style={theme == 'light' ? stylesLight.headerCover : stylesDark.headerCover }
            >
            <Image source={
              photo == null ? require('../images/avatar.png') : {uri: `https://heirtous.com/assets/images/users/${photo}`}
            } resizeMode="contain" style={{width: 120, height: 120, borderRadius: 200 / 2, marginBottom: 20, borderColor: theme == 'light' ? COLORS.darkgray : COLORS.lightgray,
												borderWidth: 2}} />
            <Text style={theme == 'light' ? stylesLight.headerName : stylesDark.headerName}>{fullname}</Text>
            </View>
            
            <View style={stylesLight.drawerButtonsContainer}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => router.push('./')} style={{flexDirection: 'row'}}>
                  <Ionicons name="person" size={20} color={theme == 'light' ? COLORS.blue : COLORS.lightText} style={{paddingRight: 20}} />
                  <Text style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText}>Dashboard</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 30}}>
                <TouchableOpacity onPress={() => router.push('/dashboard/services')} style={{flexDirection: 'row'}}>
                  <MaterialIcons name="home-repair-service" size={20} color={theme == 'light' ? COLORS.blue : COLORS.lightText} style={{paddingRight: 20}} />
                  <Text style={theme == 'light' ? stylesLight.linkText : stylesDark.linkText}>Services</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 30}}>
                <TouchableOpacity onPress={clearCredentials} style={{flexDirection: 'row'}}>
                  <FontAwesome name="sign-out" size={20} color={theme == 'light' ? COLORS.blue : COLORS.lightText} style={{paddingRight: 20}} />
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