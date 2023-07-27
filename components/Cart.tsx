import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useCart} from '../context';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const renderItemAccessory = (item: IListItem) => {
  const {removeFromCart} = useCart();

  return (
    <Button status="danger" size="tiny" onPress={() => removeFromCart(item.id)}>
      Remove
    </Button>
  );
};

const Cart = () => {
  const {items} = useCart();
  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={items}
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

export default Cart;
