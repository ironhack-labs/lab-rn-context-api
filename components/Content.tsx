import {Button, List, ListItem} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {CartContext} from '../src/context/CartContext';
import { Catalog } from '../src/components/Catalog';
import { Cart } from '../src/components/Cart';

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}



const Content = () => {
  const {cartState} = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cartState.showCart
      ? <Cart/>
      : <Catalog/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
