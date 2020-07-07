import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {Header, List} from '../../components';
import {DummyDoctor1} from '../../assests';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Ayam Goyeng"
        desc="Enak Sedap"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Ayam Goyeng"
        desc="Enak Sedap"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Ayam Goyeng"
        desc="Enak Sedap"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Ayam Goyeng"
        desc="Enak Sedap"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Ayam Goyeng"
        desc="Enak Sedap"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
