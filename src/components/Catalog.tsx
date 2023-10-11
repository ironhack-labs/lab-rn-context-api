import {Button, List, ListItem} from '@ui-kitten/components';
import React, {useContext, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import data from '../../data.json';
import CartActions from '../services/actions';
import {IListItem} from '../services/interface';
import {CartContext, CartDispatchContext} from '../services/store';

const renderItemAccessory = (item: IListItem): React.ReactElement => {
  const dispatch = useContext(CartDispatchContext);
  const {cart} = useContext(CartContext);
  const isAdded = useMemo(
    () => cart.find(itemIterator => itemIterator.id === item.id),
    [cart],
  );

  const addItemCart = (item: IListItem) => {
    dispatch(CartActions.ADD_TO_CART(item));
  };

  const removeItemCart = (item: IListItem) => {
    dispatch(CartActions.REMOVE_FROM_CART(item));
  };

  return (
    <Button
      onPress={() => (isAdded ? removeItemCart(item) : addItemCart(item))}
      size="tiny">
      {isAdded ? 'Remove' : 'Add to cart'}
    </Button>
  );
};

const Catalog = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Catálogo</Text>
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
  titlePage: {
    color: '#ffffff',
    fontSize: 16,
    padding: 10,
  },
});

export default Catalog;
