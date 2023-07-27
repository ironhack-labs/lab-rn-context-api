import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, List, ListItem} from '@ui-kitten/components';
import {useAppContext} from '../context/appContext';
import Footer from '../components/Footer';

const CartScreen = ({hideCart}: {hideCart: () => void}) => {
  const {removeItem, cart} = useAppContext();

  return (
    <>
      <View style={styles.container}>
        <List
          style={styles.container}
          data={cart}
          renderItem={({item, index}): React.ReactElement => {
            const renderItemAccessory = (): React.ReactElement => {
              return (
                <Button size="tiny" onPress={() => removeItem(item.id)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
