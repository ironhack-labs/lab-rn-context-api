import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from '../../data.json';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const renderItemAccessory = (): React.ReactElement => (
  <Button size="tiny">Add to cart</Button>
);

export const Content = () => {
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
        }): React.ReactElement => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={renderItemAccessory}
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
