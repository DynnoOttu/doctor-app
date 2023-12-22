import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PegawaiCategory, Gap, HomeProfile, NewsItem, RatedPegawai } from '../../components'
import { colors, fonts, getData, showError } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { ILNullPhoto } from '../../assets'
import {Fire} from '../../config'

const Pegawai = ({navigation}) => {
  const [news, setNews] = useState([])
  const [categoryPegawai, setCategoryPegawai] = useState([])
  const [pegawai, setPegawai] = useState([])
  useEffect(() => {
    getCategoryPegawai();
    getTopPegawai();
    getNews();
  }, [])

  const getTopPegawai = () => {
    Fire.database()
    .ref('pegawai/')
    .orderByChild('rate')
    .limitToFirst(5)
    .once('value')
    .then(res => {
      if(res.val()){
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            data: oldData[key]
          })
        })
        setPegawai(data)
      }
    })
    .catch(err => {
      showError(err.massage)
    })
  }

  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  })

  useEffect(() => {
    getData('user').then(res=>{console.log('response:',res)
      const test = res
      test.photo = res?.photo?.length>1? {uri:res.photo} :ILNullPhoto 
    setProfile(test)
    })

  }, [])

const getCategoryPegawai = () => {
  Fire.database()
  .ref('category_pegaway/')
  .once('value')
  .then(res => {
    if(res.val()){
      const data = res.val();
      const filterData = data.filter(el => el !== null);
      setCategoryPegawai(filterData)
    }
  }).catch(err => {
    showError(err.massage)
  })
}

const getNews = () => {
  Fire.database()
  .ref('news/')
  .once('value')
  .then(res => {
    console.log('data: ', res.val())
    if(res.val()){
      const data = res.val();
      const filterData = data.filter(el => el !== null);
      setNews(filterData)
    }
  }).catch(err => {
    showError(err.massage)
  })
}

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30}/>
            <HomeProfile profile={profile} onPress={ () => navigation.navigate('UserProfile', profile)}/>
            <Text style={styles.welcome}>Mau Pengaduan Apa Hari Ini?</Text>
          </View>
          <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={32}/>
        
              <Gap width={22}/>
            </View>
          </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Kepada Siapa Anda Ingin Melakukan Pengaduan</Text>
            {pegawai.map(pegawai => {
              return <RatedPegawai key={pegawai.id} name={pegawai.data.fullName} desc={pegawai.data.jabatan} avatar={{uri: pegawai.data.photo}} onPress={() => navigation.navigate('PegawaiProfile', pegawai)}/>
            })}
            <Text style={styles.sectionLabel}>Informasi</Text>
          </View>
              {news.map(item => {
                return <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
              })}
          <Gap height={30}/>
        </ScrollView>   
      </View>
    </View>
  )
}

export default Pegawai

const styles = StyleSheet.create({
  page: { backgroundColor: colors.secondary, flex: 1, },
  content: {backgroundColor: colors.white, padding: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flex: 1,},
  welcome: {fontSize: 20, fontFamily: fonts.primary[600], marginTop: 30, marginBottom: 16, color: colors.text.primary, maxWidth: 209,},
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16,},
  sectionLabel: {fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 30, marginBottom: 16,},
  wrapperSection: {paddingHorizontal: 16} 
})