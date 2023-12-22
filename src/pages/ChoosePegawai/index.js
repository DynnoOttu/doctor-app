import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, List } from '../../components'
import { DummyPegawai1 } from '../../assets'
import { colors } from '../../utils'

const ChoosePegawai = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" onPress={() => navigation.goBack()}/>
      <List type="next" profile={DummyPegawai1} name="Dynno Ottu" desc="Pria" onPress={() => navigation.navigate('Chatting')}/>
      <List type="next" profile={DummyPegawai1} name="Dynno Ottu" desc="Pria"/>
      <List type="next" profile={DummyPegawai1} name="Dynno Ottu" desc="Pria"/>
      <List type="next" profile={DummyPegawai1} name="Dynno Ottu" desc="Pria"/>
      <List type="next" profile={DummyPegawai1} name="Dynno Ottu" desc="Pria"/>
    </View>
  )
}
 
export default ChoosePegawai

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white,
  flex: 1,
 }
})