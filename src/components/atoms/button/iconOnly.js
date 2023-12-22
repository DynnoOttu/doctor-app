import { StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBackDak, IconBackLight } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'back-dark'){
            return <IconBackDak/>;
        } if (icon === 'back-light'){
            return <IconBackLight/>
        }
        return <IconBackDak/>
    } 
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  )
}

export default IconOnly