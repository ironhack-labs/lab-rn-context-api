import {StyleSheet} from 'react-native';
import React from 'react';
import {List, ListItem} from '@ui-kitten/components';
import CartItemAction from './CartItemAction';
import {Course} from '../types';

const CoursesShopList = ({data}: {data: Course[]}) => {
  return (
    <List
      style={styles.container}
      data={data}
      renderItem={({item, index}): React.ReactElement => (
        <ListItem
          title={`${item.title} | $${item.price}`}
          description={`${item.description} ${index + 1}`}
          accessoryRight={<CartItemAction {...item} />}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default CoursesShopList;
