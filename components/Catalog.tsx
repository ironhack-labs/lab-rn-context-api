import { Button, List, ListItem } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import data from '../data.json';
import CartContext from '../src/context/CartContext/cartContext';
import { IListItem } from './Content';

const Catalog = () => {

    const { addToCart, checkIfExist, removeFromCart } = useContext(CartContext)

    const renderItemAccessory = (item: IListItem): React.ReactElement => {
        const itemExist = checkIfExist!(item)

        return <Button size="tiny" style={{ backgroundColor: !itemExist ? '#2649fe' : 'red' }} onPress={() => itemExist ? removeFromCart!(item) : addToCart!(item)} >{!itemExist ? 'Add to cart' : 'Remove'}</Button>
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
                    accessoryRight={() => renderItemAccessory(item)}
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

export default Catalog;
