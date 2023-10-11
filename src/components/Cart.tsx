import {Button, List, ListItem} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CartActions from '../services/actions';
import {IListItem} from '../services/interface';
import {CartContext, CartDispatchContext} from '../services/store';

const renderItemAccessory = (item: IListItem): React.ReactElement => {
  const dispatch = useContext(CartDispatchContext);

  const removeItemCart = (item: IListItem) => {
    dispatch(CartActions.REMOVE_FROM_CART(item));
  };

  return (
    <Button onPress={() => removeItemCart(item)} size="tiny">
      Remove
    </Button>
  );
};

const Cart = () => {
  const {cart} = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Carrito</Text>
      <List
        style={styles.container}
        data={cart}
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

export default Cart;
