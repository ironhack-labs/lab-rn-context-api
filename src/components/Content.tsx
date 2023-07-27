import {Button, List, ListItem} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import data from '../../data.json';
import {useProductContext} from '../context/ProductContext';
import {contentStyles} from '../theme/Content.styles';
import {IListItem} from '../interfaces/interfaces';

const Content = () => {
  const {addToCard, cart} = useProductContext();

  return (
    <View style={contentStyles.container}>
      <List
        style={contentStyles.container}
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
            return isInTheCart ? (
              <Button size="tiny" style={contentStyles.addedButton}>
                Added
              </Button>
            ) : (
              <Button size="tiny" onPress={() => addToCard(item)}>
                Add to cart
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
  );
};

export default Content;
