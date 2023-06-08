import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, TouchableOpacity } from "react-native";
import { useAuth } from "../../../context/auth";
import { Drawer } from 'expo-router/drawer'
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../../assets/constants/constants'
import { useRouter, useSearchParams } from 'expo-router'

const Messaging = ({ route, navigation }) => {
  const {credentials} = useAuth()
  const {username, theme} = credentials
  const params = useSearchParams();
   const router = useRouter()
  const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Tomer",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "David",
        },
        {
          id: "3",
          text: "Hi Oghenekharo, thank you! 😇",
          time: "08:50",
          user: username,
      },
      {
        id: "4",
        text: "Welcome Home! 😇",
        time: "08:50",
        user: username,
      },
      {
        id: "5",
        text: "Hi Tomer, thank you! 😇",
        time: "08:50",
        user: "David",
      },
    ]);
    //Message from text input
    const [message, setMessage] = useState("");

    /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
    const handleNewMessage = () => {
      setChatMessages([...chatMessages, {id: Math.floor(Math.random() * 100), text: message, time:"08:50", user: username}])
		setMessage("")
    };
    return (
        <View style={styles.messagingscreen}>
        <Drawer.Screen
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
                },
                headerTitleStyle: {
                  fontFamily: 'DMMedium'
                },
                headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white ,
                headerTitle: `Chat with ${params.receiver}`,
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <TouchableOpacity style={{paddingLeft: 12}} onPress={() => router.push(`/dashboard/gifts/gift/${params.gift_id}`)}>
                    <Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={23} />
                  </TouchableOpacity>
                )
              }}
            />
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                {chatMessages[0] ? (
                    <FlatList
                        data={chatMessages}
                        renderItem={({ item }) => (
                            <MessageComponent item={item} user={username} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    ""
                )}
            </View>

            <View style={styles.messaginginputContainer}>
                <TextInput
					 		value={message}
                    style={styles.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable
                    style={styles.messagingbuttonContainer}
                    onPress={handleNewMessage}
                >
                    <View>
                        <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const MessageComponent = ({ item, user }) => {
	const status = item.user !== user;
	return (
		<View>
			<View
				style={
					status
						? styles.mmessageWrapper
						: [styles.mmessageWrapper, { alignItems: "flex-end" }]
				}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Ionicons
						name='person-circle-outline'
						size={30}
						color='black'
						style={styles.mavatar}
					/>
					<View
						style={
							status
								? styles.mmessage
								: [styles.mmessage, { backgroundColor: COLORS.dimgray }]
						}
					>
						<Text>{item.text}</Text>
					</View>
				</View>
				<Text style={{ marginLeft: 40 }}>{item.time}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	messaginginputContainer: {
		width: "100%",
		minHeight: 100,
		backgroundColor: "white",
		paddingVertical: 30,
		paddingHorizontal: 15,
		justifyContent: "center",
		flexDirection: "row",
	},
	messaginginput: {
		borderWidth: 1,
		padding: 15,
		flex: 1,
		marginRight: 10,
		borderRadius: 20,
	},
	messagingbuttonContainer: {
		width: "30%",
		backgroundColor: "green",
		borderRadius: 3,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
	},
	mmessageWrapper: {
		width: "100%",
		alignItems: "flex-start",
		marginBottom: 15,
	},
	mmessage: {
		maxWidth: "50%",
		backgroundColor: COLORS.blue,
		padding: 15,
		borderRadius: 10,
		marginBottom: 2,
	},
});

export default Messaging;