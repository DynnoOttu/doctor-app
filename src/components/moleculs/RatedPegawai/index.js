import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconStar } from '../../../assets'
import { fonts, colors } from '../../../utils'


const RatedPegawai = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar}/>
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <IconStar style={styles.rate}/>
      <IconStar/>
      <IconStar/>
      <IconStar/>
      <IconStar/>
    </TouchableOpacity>
  )
}

export default RatedPegawai

const styles = StyleSheet.create({
  avatar: {width: 50, height: 50, borderRadius: 50/2, marginRight: 12, marginBottom: 16 },
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  rate: {flexDirection: 'row', },
  name: {fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary},
  category: {fontSize: 12, fontFamily: fonts.primary.normal, color: colors.text.secondary, marginTop: 2},
  profile: {flex: 1}
})