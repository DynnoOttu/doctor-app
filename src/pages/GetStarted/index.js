import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { IlGetStarted, IlLogo } from '../../assets/ilustration';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={IlGetStarted} style={styles.page}>
      <View>
        <IlLogo/>
        <Text style={styles.title}>Melakukan Pengaduan Masyarakat Menjadi Lebih Muda</Text>
      </View>     
      <View>
        <Button title="Ged Started" onPress={() => navigation.navigate('Register')}/> 
        <Gap height={16} />
        <Button type="secondary" title="Sign In" onPress={() => navigation.replace('Login')} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {padding: 40, justifyContent: 'space-between', backgroundColor: colors.white, flex: 1},
    title: {fontSize: 28, marginTop: 91, color: colors.white, fontFamily: fonts.primary[600]},
})