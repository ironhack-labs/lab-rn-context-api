import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useCart} from '../context';
import data from '../data.json';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const renderItemAccessory = (item: IListItem) => {
  const {addToCart, removeFromCart, isAlreadyInCart} = useCart();
  const isInCart = isAlreadyInCart(item.id);

  return (
    <Button
      status={isInCart ? 'danger' : 'primary'}
      size="tiny"
      onPress={() => (isInCart ? removeFromCart(item.id) : addToCart(item))}>
      {isInCart ? 'Remove' : 'Add to cart'}
    </Button>
  );
};

const Catalog = () => {
  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data}
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
            accessoryRight={() => renderItemAccessory(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Catalog;
