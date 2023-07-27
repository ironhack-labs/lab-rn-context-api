import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from '@ui-kitten/components';

import type {Product} from '../types/Product.type';

import data from '../../data.json';
import ProductItem from './ProductItem';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Catalog = () => {
  return (
    <List
      style={styles.container}
      data={data}
      renderItem={({
        item,
        index,
      }: {
        item: IListItem;
        index: number;
      }): React.ReactElement => {
        return <ProductItem index={index} product={item as Product} />;
      }}
    />
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
