import {List, ListItem, Text} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Item} from '../models';
import {CartButton} from './CartButton';

type ListItemsProps = {
  items: Item[];
};

export const ListItems = ({items}: ListItemsProps) => (
  <View style={styles.container}>
    {items.length ? (
      <List
        style={styles.container}
        data={items}
        renderItem={({
          item,
          index,
        }: {
          item: Item;
          index: number;
        }): React.ReactElement => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={<CartButton item={item} />}
          />
        )}
      />
    ) : (
      <View style={styles.empty}>
        <Text>No Content</Text>
      </View>
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
