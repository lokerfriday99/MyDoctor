import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List, Profile, Gap} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Izul Zulfian" desc="Front-end Dev" />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Edit Profile"
        desc="Last Update"
        type="next"
        icon="language"
      />
      <List name="Edit Profile" desc="Last Update" type="next" icon="rate" />
      <List name="Edit Profile" desc="Last Update" type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
