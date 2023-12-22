import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts, getChatTime, getData, setDataChat } from '../../utils'
import {Fire} from '../../config'
import {showError} from '../../utils'

  const Chatting = ({navigation, route}) => {
  const dataPegawai = route.params
  const [chatContent, setChatContent] = useState("");
  const [user, setUser] = useState({})
  const [chatData, setChatData] = useState([])

  useEffect(() => {
    getDataUserfromLocal();
    const chatID = `${user.uid}_${dataPegawai.data.uid}`
    const urlFairbase = `chatting/${chatID}/allChat/`
    Fire.database().ref(urlFairbase).on('value', snapshot => {
      if(snapshot.val()){
        const dataSnapshot = snapshot.val();
        const allDataChat = [];
        Object.keys(dataSnapshot).map(key => {
          const dataChat = dataSnapshot[key]
          const newDataChat = [];

          Object.keys(dataChat).map(itemChat => {
            newDataChat.push({
              id: itemChat,
              data: dataChat[itemChat]
            })
          })

          allDataChat.push({
            id: key,
            data: newDataChat,
          })
        })
        console.log('all data chat: ', allDataChat)
        setChatData(allDataChat)
      }
    })
  }, [dataPegawai.data.uid, user.uid])

  const getDataUserfromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    })
  }

  const chatSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    }

    const chatID = `${user.uid}_${dataPegawai.data.uid}`
    
    const urlFairbase = `chatting/${chatID}/allChat/${setDataChat(today)}`
    const urlMessageUser = `messages/${user.uid}/${chatID}`
    const urlMessagePegawai = `messages/${dataPegawai.data.uid}/${chatID}`
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataPegawai.data.uid, 
    }

    const dataHistoryChatForPegawai = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid, 
    }

    setChatContent("");
    // Kirim ke Firebasem
    Fire.database().ref(urlFairbase)
    .push(data)
    .then(() => {
      setChatContent('')
      // Set history for user
      Fire
      .database()
      .ref(urlMessageUser)
      .set(dataHistoryChatForUser)
      // set history for pegawai
      Fire
      .database()
      .ref(urlMessagePegawai)
      .set(dataHistoryChatForPegawai)
    })
    .catch(err => {
      showError(err.massage);
    })

  }

  return (
    <View style={styles.page}>
      <Header type="dark-profile" title={dataPegawai.data.fullName} desc={dataPegawai.data.jabatan} photo={{uri: dataPegawai.data.photo }} onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map(chat => {
            return(
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return <ChatItem 
                  key={itemChat.id} 
                  isMe={isMe} 
                  text={itemChat.data.chatContent} 
                  date={itemChat.data.chatTime} 
                  photo={isMe ? null : {uri: dataPegawai.data.photo}}/>
                })}
              </View>
            )
          })}
          
        </ScrollView>
      </View>
      <InputChat value={chatContent} onChangeText={(value) => setChatContent(value)} onButtonPress={chatSend}/>
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1, },
  chatDate: {fontSize: 11, fontFamily: fonts.primary.normal, color: colors.text.secondary, marginVertical: 20, textAlign: 'center',},
  content: {flex: 1, }
})