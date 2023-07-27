import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from '../data.json';
import {useAppContext} from '../context/appContext';

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Content = () => {
  const {addToCard, cart} = useAppContext();

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
        }): React.ReactElement => {

          const isInTheCart = cart.some(element => element.id === item.id);

          const renderItemAccessory = (): React.ReactElement => {
            return isInTheCart ? <Button size="tiny">In cart!</Button> : <Button size="tiny" onPress={() => addToCard(item)}>Add to cart</Button>;
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
