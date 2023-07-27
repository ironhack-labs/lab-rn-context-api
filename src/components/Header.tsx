import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

const Header = () => (
  <View style={styles.container}>
    <Text category='h1'>LAB Context</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Header;
