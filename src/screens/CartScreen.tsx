import React from 'react';
import {View} from 'react-native';
import {Button, List, ListItem} from '@ui-kitten/components';
import {useProductContext} from '../context/ProductContext';
import {Footer} from '../components/Footer';
import {cartStyles} from '../theme/Cart.styles';

const CartScreen = ({hideCart}: {hideCart: () => void}) => {
  const {removeItem, cart} = useProductContext();

  return (
    <>
      <View style={cartStyles.container}>
        <List
          style={cartStyles.container}
          data={cart}
          renderItem={({item, index}): React.ReactElement => {
            const renderItemAccessory = (): React.ReactElement => {
              return (
                <Button
                  size="tiny"
                  style={cartStyles.removeButton}
                  onPress={() => removeItem(item.id)}>
                  Remove
                </Button>
              );
            };

            return (
              <ListItem
                title={`${item.title} | $${item.price}`}
                description={`${item.description} ${index + 1}`}
                accessoryRight={renderItemAccessory}
              />
            );
          }}
        />
      </View>
      <Footer showCart={hideCart} isCart />
    </>
  );
};

export default CartScreen;
