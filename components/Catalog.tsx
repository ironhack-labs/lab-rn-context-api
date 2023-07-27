import {List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useCart} from '../context/context';
import {RenderItemAccessory} from './AddRemove';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
  added: boolean;
}

const Catalog = () => {
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

export default Catalog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
