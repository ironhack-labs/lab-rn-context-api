import { Button, List, ListItem } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { IListItem } from '../../components/Content';
import { CartContext } from '../context/CartContext';
import {  StyleSheet, View } from 'react-native';

export const Cart = () => {
  const {cartState, removeFromCart} = useContext(CartContext);

  return (
    <List
      style={styles.container}
      data={cartState.items}
      renderItem={({
        item,
        index,
      }: {
        item: IListItem;
        index: number;
      }): React.ReactElement => (
        <ListItem
          title={`${item.title} | $${item.price}`}
          description={`${item.description} ${index + 1}`}
          accessoryRight={() =>
            renderItemAccessory(
              () => removeFromCart(item),
            )
          }
        />
      )}
    />
  );
};

const renderItemAccessory = (
  onDelete: () => void,
): React.ReactElement => (
  <View style={{flexDirection: 'column'}}>
  <Button size="tiny" style={{backgroundColor: 'red'}} onPress={onDelete}>
    Remove
  </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});