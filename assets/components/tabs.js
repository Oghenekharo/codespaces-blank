import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {COLORS} from '../constants/constants'
import { useAuth } from "../../context/auth";

const TabButton = ({name, activeTab, handlePress}) => {
	const {credentials} = useAuth()
  const {theme} = credentials
  return(
    <TouchableOpacity 
      style={{
			margin: 5,
			flex: 1, 
			width: 200, 
			backgroundColor: theme == 'light' ? COLORS.blue : COLORS.dimgray,
			padding: 10, 
			borderRadius: 5
      }} 
      onPress={handlePress}
      >
      <Text style={{textAlign:'center', color: COLORS.white}}>{name}</Text>
    </TouchableOpacity>
  )
}

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  
    return (
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
            {tabs.map((item, index) => (
					<TabButton 
                    name={item}
                    activeTab={activeTab}
                    handlePress={() => setActiveTab(item)}
						  key={index}
                />
				))}
        </View>
  )
}

export default Tabs