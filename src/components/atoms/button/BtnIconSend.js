import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable, onPress}) => {
  if (disable){
    return (
      <View>
        <IconSendDark/>
      </View>
    )
  }


  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight/> 
    </TouchableOpacity>
  )
}

export default BtnIconSend 

const styles = StyleSheet.create({
  container: (disable) => ( 
    {backgroundColor: disable ? colors.disable : colors.tertiary, width: 45, height:45, borderRadius: 10, borderRadius: 10, paddingTop: 3, paddingLeft: 8, paddingRight: 3, paddingBottom: 8,
    })
})