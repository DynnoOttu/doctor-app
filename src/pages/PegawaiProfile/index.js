import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, Profile, ProfileItem} from '../../components'
import { colors } from '../../utils'

const PegawaiProfile = ({navigation, route}) => {
  const dataPegawai = route.params;
  return (
    <View style={styles.page}>
      <Header title="Pegawai Profile" onPress={() => navigation.goBack()}/>
      <Profile name={dataPegawai.data.fullName} desc={dataPegawai.data.jabatan} photo={{uri: dataPegawai.data.photo }} />
      <Gap height={10}/>
      <ProfileItem label="Nip" value={dataPegawai.data.nip}/>
      <ProfileItem label="Email" value={dataPegawai.data.email}/>
      <View style={styles.action}>
        <Button title="Mulai Pengaduan" onPress={() => navigation.navigate('Chatting', dataPegawai)}/>
      </View>
    </View>
  )
}

export default PegawaiProfile

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1,},
  action: {paddingHorizontal: 40, paddingTop: 23, }
})