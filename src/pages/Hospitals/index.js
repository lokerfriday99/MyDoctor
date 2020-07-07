import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  ILHospitalBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assests';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Izul Zulfian</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ListHospital
          type="Rumah Sakit"
          name="Anugerah Bunda Khatulistiwa"
          address="Jl. Ahmad Yani No. 233"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Kota Pontianak Raya"
          address="Jl. Kom Yos Sudarso No. 222"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Sudarso Sungai Raya"
          address="Jl. Sungai Raya Dalam No. 254"
          pic={DummyHospital3}
        />
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingVertical: 14,
  },
});
