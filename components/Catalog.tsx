/* eslint-disable react/react-in-jsx-scope */
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import {List, ListItem} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

import {CustomButton} from './CustomButton';
import {Product} from '../types/types';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

interface CatalogProps {
  data: Product[] | null;
}

export const Catalog = ({data}: CatalogProps) => {
  const {products, addToCart, removeFromCart} = useContext(CartContext);

  const renderButton = (item: IListItem): React.ReactElement => {
    if (products?.findIndex(product => product.id === item.id) !== -1) {
      return (
        <CustomButton onPress={() => removeFromCart({...item})} text="Remove" />
      );
    } else {
      return (
        <CustomButton onPress={() => addToCart({...item})} text="Add to Cart" />
      );
    }
  };

  return (
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
          accessoryRight={() => renderButton(item)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
