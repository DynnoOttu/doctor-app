
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {IlLogo} from '../../assets/ilustration';
import {colors, fonts} from '../../utils'
import {Fire,} from '../../config'

const Splash = ({navigation}) => {
  useEffect (() =>{
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <IlLogo />
      <Text style={styles.title}>Pengaduan Masyarakat </Text>
      <Text style={styles.title2}>Kelurahan NefoNaek </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 5,
  },
});
