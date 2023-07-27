import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useCart, Product} from '../context/context';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
  added: boolean;
}

const RenderItemAccessory = (product: Product) => {
  const {dispatch} = useCart();
  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', payload: product});
  };

  const removeFromCart = () => {
    dispatch({type: 'REMOVE_FROM_CART', payload: product});
  };

  return product.added ? (
    <Button size="tiny" onPress={() => removeFromCart()}>
      Remove
    </Button>
  ) : (
    <Button size="tiny" onPress={() => addToCart()}>
      Add to cart
    </Button>
  );
};

const Content = () => {
  const {state} = useCart();
  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={state.products}
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
            accessoryRight={() => RenderItemAccessory(item)}
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

export default Content;
