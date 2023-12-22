import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react';
import { DummyHospital1, DummyHospital2 } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms'

const ListHospital = () => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Text style={styles.title}>Sejarah Kelurahan Nefo Naek</Text>
            <Text style={styles.address}>Pada awalnya Kelurahan Nefo Naek dibentuk berdasarkan Peraturan Pemerintah Nomor 19 Tahun 2008 dan termasuk dalam wilayah Kecamatan Kelapa Lima. Namun karena dipandang perlu diadakannya pemekaran pada wilayah Kecamatan Kelapa Lima, oleh karena itu Kecamatan Kelapa Lima dimekarkan menjadi dua yaitu Kecamatan Kelapa Lima dan Kecamatan Kota Lama. Wilayah Kecamatan Kelapa Lima meliputi Kelurahan Kelapa Lima, Kelurahan Oesapa, Kelurahan Oesapa Barat, Kelurahan Oesapa Selatan dan Kelurahan Lasiana. Sedangkan Berdasarkan Peraturan Daerah Kota Kupang Nomor 04 Tahun 2010 tentang Pembentukan Kecamatan Kota Lama, maka wilayah Kecamatan Kota Lama sebagai kecamatan pemekaran terdiri dari 10 (sepuluh) wilayah kelurahan yaitu Kelurahan Airmata, Kelurahan Bonipoi, Kelurahan LLBK, Kelurahan Solor, Kelurahan Merdeka, Kelurahan Tode Kisar, Kelurahan Fatubesi, Kelurahan Oeba, Kelurahan Pasir Panjang dan Kelurahan Nefo Naek. </Text>          
        </View>
        <Gap height={24}/>
        <View>
            <Text style={styles.title}>Letak Geografis</Text>
            <Text style={styles.address}>
            Kelurahan Nefo Naek terletak 150 m dari garis pantai Teluk Kupang dalam kawasan areal pemukiman yang telah tertata sesuai prosedur area pengembangan pemukiman perumahan Tata Kota.
            Luas wilayah Kelurahan Nefo Naek  adalah 34 HA, dengan batas-batas wilayah antara lain: Timur berbatasan dengan Kelurahan Pasir Panjang, Barat berbatasan dengan Kelurahan Oeba,Utara berbatasan dengan Kelurahan Pasir Panjang, Selatan  berbatasan dengan Kelurahan Fatululi
            </Text>          
        </View>
        <Gap height={24}/>
        <View>
            <Text style={styles.title}>Struktur Organisai</Text>
            <Text style={styles.address}>1. Lurah</Text>
            <Text style={styles.address}>2. Sekretaris</Text>
            <Text style={styles.address}>3. Kasie Pem & Trantib Umum</Text>      
            <Text style={styles.address}>4. Kasie PMK</Text>  
            <Text style={styles.address}>5. Kasie Pelayanan Masyarakat</Text>         
        </View>
        </ScrollView>
    </View>

  )
}

export default ListHospital

const styles = StyleSheet.create({
    picture: {width: 80, height: 60, borderRadius: 11, marginRight: 16,},
    container: {flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: colors.border},
    title: {fontSize: 16, fontFamily: fonts.primary[800], color: colors.text.primary},
    address: {fontSize: 14, fontFamily: fonts.primary[600], color: colors.text.secondary, marginTop: 6, marginRight: 16,}
})