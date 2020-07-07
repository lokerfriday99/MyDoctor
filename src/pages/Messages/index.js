import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assests';

const Messages = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Name 1',
      desc: 'Desc 1',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Name 2',
      desc: 'Desc 2',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'Name 3',
      desc: 'Desc 3',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages Pages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
