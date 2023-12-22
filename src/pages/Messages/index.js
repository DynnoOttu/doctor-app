import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { List } from '../../components'
import { colors, fonts, getData } from '../../utils'
import {Fire} from '../../config'

const Messages = ({navigation}) => {

  const [user, setUser] = useState({})
  const [historyChat, setHistoryChat] = useState([])

  useEffect(() => {
    getDataUserfromLocal()
    const rootDB = Fire.database().ref()
    const urlHistory = `messages/${user.uid}/`
    const massageDb = rootDB.child(urlHistory)
    massageDb.on('value', async snapshot => {
      if(snapshot.val()){
        const oldData = snapshot.val()
        const data = [];
        const promises = await Object.keys(oldData).map(async key => {
          const urlUidPegawai = `pegawai/${oldData[key].uidPartner}`
          const detailPegawai = await rootDB.child(urlUidPegawai).once('value')
          console.log('detail pegawai: ', detailPegawai.val())
          data.push({
            id: key,
            detailPegawai: detailPegawai.val(),
            ...oldData[key]
          })
        })
        await Promise.all(promises)
        setHistoryChat(data)
      }
        
    })
  }, [user.uid])

  const getDataUserfromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    })
  }


  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          historyChat.map(chat => {
            const dataPegawai = {
              id: chat.detailPegawai.uid,
              data: chat.detailPegawai
            }
            return <List key={chat.id} profile={{uri: chat.detailPegawai.photo}} name={chat.detailPegawai.fullName} desc={chat.lastContentChat} onPress={() => navigation.navigate('Chatting', dataPegawai)}/>
          })
        }
      </View> 
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1, },
  content: {backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
  title: {fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 30, marginLeft: 16}
})