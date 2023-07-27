import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';
import {Cart} from './Cart';
import {Catalog} from './Catalog';

import data from '../data.json';

const Content = () => {
  const {showCart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      {showCart ? <Cart /> : <Catalog data={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
