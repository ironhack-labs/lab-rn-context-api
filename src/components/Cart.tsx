import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {List} from '@ui-kitten/components';

import type {Product} from '../types/Product.type';

import {CartContext} from '../context/CartContext';

import CartEmpty from './CartEmpty';
import ProductItem from './ProductItem';

const Cart = () => {
  const {items} = useContext(CartContext);

  return (
    <List
      data={items}
      ListEmptyComponent={<CartEmpty />}
      contentContainerStyle={styles.listContainer}
      renderItem={({
        item,
        index,
      }: {
        item: Product;
        index: number;
      }): React.ReactElement => {
        return <ProductItem index={index} product={item} />;
      }}
    />
  );
};

export default Cart;

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
});
