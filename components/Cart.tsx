import { Button, Card, List, ListItem } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import CartContext from '../src/context/CartContext/cartContext';
import { IListItem } from './Content';

const Cart = () => {

    const { cart, addToCart, checkIfExist, removeFromCart } = useContext(CartContext)

    const renderItemAccessory = (item: IListItem): React.ReactElement => {
        const itemExist = checkIfExist!(item)

        return <Button size="tiny" style={{ backgroundColor: !itemExist ? '#2649fe' : 'red' }} onPress={() => itemExist ? removeFromCart!(item) : addToCart!(item)} >{!itemExist ? 'Add to cart' : 'Remove'}</Button>
    };

    return (
        <List
            style={styles.container}
            data={cart}
            ListEmptyComponent={
                <Text style={{ alignSelf: 'center', color: 'white', marginTop: 20 }}>Empty cart</Text>
            }
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

export default Cart;
