import { Button, List, ListItem } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useCartContextProvider } from '../hooks/context';
import Cart from './Cart';
import Catalog from './Catalog';



const Content = () => {

  const {toggleCart } = useCartContextProvider();
  console.log(toggleCart)
  return (
    <View style={styles.container}>
      {toggleCart ? <Cart/> : <Catalog/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
