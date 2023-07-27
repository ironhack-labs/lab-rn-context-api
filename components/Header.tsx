import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useCartContext} from '../hooks/CartContext';

const Header = () => {
  const {appTitle} = useCartContext();
  return (
    <View style={styles.container}>
      <Text category="h1">{appTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Header;
