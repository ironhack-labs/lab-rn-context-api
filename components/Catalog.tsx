import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List, ListItem } from '@ui-kitten/components';
import { IListItem } from '../types';
import { useCart } from '../CartContext';

const Catalog = () => {
  const { state, dispatch } = useCart();

  const renderItemAccessory = (item: IListItem) => {
    // Lógica para renderizar el botón de agregar/eliminar (similar a la que tenías)
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={state.catalog} // Mostramos el catálogo del estado del contexto
        renderItem={({ item }: { item: IListItem }) => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description}`}
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
