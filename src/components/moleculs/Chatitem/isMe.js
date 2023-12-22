import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const isMe = ({text, date}) => {
  return (
    <View style={styles.container}>
    <View style={styles.chatComponent}>
      <Text style={styles.text}>{text}</Text>
    </View>
    <Text style={styles.date}>{date}</Text>
  </View>
  )
}

export default isMe;

const styles = StyleSheet.create({
    container: { marginBottom: 20,  alignItems: 'flex-end', paddingRight: 16},
    chatComponent: {maxWidth: '70%', padding: 12, paddingRight: 18, backgroundColor: colors.cardLight, borderRadius: 10, borderBottomRightRadius: 0,},
    text: {fontSize: 14, fontFamily: fonts.primary.normal, color: colors.text.primary},
    date: {fontSize: 11, fontFamily: fonts.primary.normal, color: colors.text.secondary, marginTop: 8,}
})