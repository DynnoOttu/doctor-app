import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPegawai, IconPegawaiActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets'
import { colors, fonts } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Pegawai'){
            return active ? <IconPegawaiActive /> : <IconPegawai/>
        } if (title === 'Messages'){
            return active ? <IconMessagesActive /> : <IconMessages/>
        } if (title === 'Hospitals'){
            return active ? <IconHospitalsActive/> : <IconHospitals/>
        }
        return <IconPegawai/>
    };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
        <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container: {alignItems: 'center',},
    text: (active) => (
      {fontSize: 10, color: active ? colors.text.menuActive :  colors.text.menuInactive, fontFamily: fonts.primary[600], marginTop: 4}
    )
})