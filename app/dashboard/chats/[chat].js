import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, TextInput, ScrollView, Image, KeyboardAvoidingView, Text, RefreshControl, FlatList, Pressable, TouchableOpacity } from "react-native";
import { useAuth } from "../../../context/auth";
import { Stack } from 'expo-router'
import { StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from '../../../assets/constants/constants'
import { useRouter, useSearchParams } from 'expo-router'
import axios from "axios";
import {decode} from 'html-entities';


const Messaging = ({ route, navigation }) => {
	const [refreshing, setRefreshing] = useState(false)
	const {credentials} = useAuth()
	const {user_id, theme} = credentials
	const params = useSearchParams();
	const router = useRouter()
	const [chatMessages, setChatMessages] = useState([]);
	const {sender, receiver, receiverName, owner, receiverPhoto, gift_id} = params;
	const [error, setError] = useState("")
	//Message from text input
	const [message, setMessage] = useState("");
	
	const getMessages = () => {
		const url = 'https://heirtous.com/api/chats';
			
		let formData = new FormData();
			
		const config = {
			headers: {'Content-Type': 'multipart/form-data'},
		};
			
		formData.append('query', 'chat');
		formData.append('gift_id', gift_id);
		formData.append('sender', sender);
		formData.append('receiver', receiver);

		axios
			.post(url, formData, config)
			.then(async (result) => {
				if(result.data.status == 'success'){
					setChatMessages(result.data.response)
				}else if(result.data.status == "empty"){
					setError(result.data.response)
				}else{
					console.log(result.data.response)
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}
	
	useLayoutEffect(() => {
		getMessages()
	}, [params])



	// Handles sending the message to the database
    const handleNewMessage = () => {
      if(message != null || message != ""){
			const url = 'https://heirtous.com/api/chats';
			
			let formData = new FormData();
				
			const config = {
				headers: {'Content-Type': 'multipart/form-data'},
			};
				
			formData.append('query', 'sendmessage');
			formData.append('giftid', gift_id);
			formData.append('sender', sender);
			formData.append('receiver', receiver);
			formData.append('message', message);
			if(user_id == owner){
				formData.append('type', 'giver');
			}else{
				formData.append('type', 'receiver');
			}

			axios
				.post(url, formData, config)
				.then(async (result) => {
					if(result.data.status == 'success'){
						getMessages()
						setMessage("")
						setError("")
					}else{
						console.log(result.data.response)
					}
				})
				.catch((error) => {
					console.log(error)
				})
		}
    };
    return (
        <View style={styles.messagingscreen}>
        <Stack.Screen
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
                },
                headerTitleStyle: {
                  fontFamily: 'DMMedium'
                },
                headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white ,
                headerTitle: `${receiverName}`,
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <View style={{flexDirection: 'row'}}>
						<TouchableOpacity style={{paddingLeft: 13, paddingRight: 10, paddingTop: 8}} onPress={() => router.replace({pathname: `/dashboard/gifts/gift/[gift]`, params: {gift_id: gift_id}})}>
							<Ionicons name="arrow-back" color={theme == 'light' ? COLORS.dark : COLORS.white } size={25} />
						</TouchableOpacity>
						<Image
						source={{uri: `https://heirtous.com/assets/images/users/${receiverPhoto}`}}
						style={{
							height: 40,
							width: 40,
							borderRadius: 200 / 2
						}}
					/>
						</View>
                )
              }}
            />
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10, backgroundColor: theme == 'light' ? COLORS.snow : COLORS.black },
                ]}
            >
                {chatMessages.length > 0 ? (
						<FlatList
							 data={chatMessages}
							 showsVerticalScrollIndicator={false}
							 showsHorizontalScrollIndicator={false}
							 renderItem={({ item }) => (
								  <MessageComponent userid={user_id} item={item} getMessages={getMessages} />
							 )}
							 keyExtractor={(item) => item.message_id}
							 onEndReached={() => getMessages()}
							 onMomentumScrollEnd={e => {
								if (e.nativeEvent.contentOffset.y === 0) {
								  getMessages()
								}
							  }}
							 inverted
							//  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => getMessages()} />}
						/>
				  ) : <View style={{alignItems: 'center', justifyContent: 'center', height: 600}}>
				  <Text style={{fontSize: 15, fontFamily: 'DMMedium'}}>{error}</Text>
				  <Text style={{fontSize: 10, fontFamily: 'DMRegular'}}>Type a message below to start a chat</Text>
			  </View> }
            </View>

            <KeyboardAvoidingView>
				<View style={[styles.messaginginputContainer, {backgroundColor: theme == 'light' ? COLORS.snow : COLORS.black}]}>
                <TextInput
					 		value={message}
							placeholder="Enter message ..."
							placeholderTextColor={theme == 'light' ? COLORS.gray : COLORS.white}
                    style={[styles.messaginginput,
							{
								backgroundColor: theme == 'light' ? COLORS.snow : COLORS.darkgray,
								color: theme == 'light' ? COLORS.black : COLORS.white,
								borderColor: theme == 'light' ? COLORS.silver : COLORS.darkgray,
							}]}
                    onChangeText={(value) => setMessage(value)}
                />
                <TouchableOpacity
                    style={[styles.messagingbuttonContainer, {backgroundColor: theme == 'light' ? COLORS.blue : COLORS.gray}]}
                    onPress={handleNewMessage}
						  circleSize={50}
                >
						<FontAwesome name="send" size={18} color={COLORS.white} />
                </TouchableOpacity>
            </View>
				</KeyboardAvoidingView>
        </View>
    );
};

const MessageComponent = ({ item, getMessages, userid  }) => {
	const credentials = useAuth()
	const {theme} = credentials
	const status = item.sender !== userid;
	return (
		<View>
			<View
				style={
						status
						? [styles.mmessageWrapper]
						:
						[styles.mmessageWrapper, { alignItems: "flex-end" }]
				}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View
						style={
							status
								? [styles.mmessage, {borderTopLeftRadius: 0}]
								:
								[styles.mmessage, { marginBottom: 10, backgroundColor: theme == 'light' ? COLORS.blue : COLORS.gray, borderBottomRightRadius: 0 }]
						}
					>
						<Text selectable style={status ? styles.message : styles.message2}>{decode(item.message)}</Text>
					</View>
				</View>
				<Text selectable style={{ marginBottom: 10, marginLeft: 10, fontSize: 10, fontFamily: 'DMRegular', color: theme == 'light' ? COLORS.gray : COLORS.lightgray }}>{item.datelogged} {item.time}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	messagingscreen: {
		flex: 1
	},
	messaginginputContainer: {
		width: "100%",
		minHeight: 50,
		paddingVertical: 20,
		paddingHorizontal: 10,
		justifyContent: "center",
		flexDirection: "row",
	},
	messaginginput: {
		borderWidth: 1,
		color: COLORS.dark,
		padding: 12,
		backgroundColor: COLORS.white,
		flex: 1,
		marginRight: 10,
		borderRadius: 40,
		shadowColor: COLORS.gray,
       shadowOffset: {
           width: 0,
           height: 2,
       },
       shadowOpacity: 0.50,
       shadowRadius: 10,
       elevation: 10,
		 fontFamily: 'DMRegular'
	},
	messagingbuttonContainer: {
		position: 'absolute',
		right: 25,
		top: 24,
		padding: 14,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 200 / 2,
		shadowColor: COLORS.gray,
       shadowOffset: {
           width: 2,
           height: 5,
       },
       shadowOpacity: 0.50,
       shadowRadius: 10,
       elevation: 20,
	},
	mmessageWrapper: {
		width: "100%",
		alignItems: "flex-start",
		marginBottom: 10,
	},
	mmessage: {
		backgroundColor: COLORS.white,
		maxWidth: "70%",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
		fontFamily: 'DMRegular'
	},
	message:{
		fontFamily: 'DMRegular',
		color: COLORS.dark
	},
	message2:{
		fontFamily: 'DMRegular',
		color: COLORS.white
	}
});

export default Messaging;