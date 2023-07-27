import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <Text category='h6' style={styles.text}>
        Your cart is empty
      </Text>
    </View>
  );
};

export default CartEmpty;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
