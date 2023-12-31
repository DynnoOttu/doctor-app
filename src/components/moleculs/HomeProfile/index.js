import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import {ILNullPhoto} from '../../../assets'
import { fonts, colors, getData} from '../../../utils'

const HomeProfile = ({onPress, profile}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46/2, marginRight: 12,},
  name: {fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary},
  profession: {fontSize: 12, fontFamily: fonts.primary[400], color: colors.text.secondary}
})