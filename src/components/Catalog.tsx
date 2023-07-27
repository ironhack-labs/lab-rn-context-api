import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { CartItem } from './ListItem';
import data from '../../data.json';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Catalog = () => {
  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data}
        renderItem={({
          item,
          index
        }: {
          item: IListItem;
          index: number;
        }): React.ReactElement => <CartItem index={index} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Catalog;
