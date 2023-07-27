import { List, ListItem } from "@ui-kitten/components";
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { IListItem } from "../Interfaces/interface";
import { useCartContextProvider } from "../hooks/context";
import RenderItemAccessory from "./RenderItemAccessory";


const Cart = () => {

    const { addToCart, removeFromCart, cartItems } = useCartContextProvider();
    console.log()
    return (
        cartItems.length == 0 ? <Text style={styles.cartEmpty}>The cart is empty.</Text> :
            <List
                style={styles.container}
                data={cartItems}
                renderItem={({
                    item,
                    index,
                }: {
                    item: IListItem;
                    index: number;
                }): React.ReactElement => {
                    return (
                        <ListItem
                            title={`${item.title} | $${item.price}`}
                            description={`${item.description} ${index + 1}`}
                            accessoryRight={RenderItemAccessory(async () => {
                                removeFromCart(item.id)
                            }, true)} />
                    );
                }}
            />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartEmpty: {
        flex: 1,
        marginTop: 100,
        fontSize: 20,
        alignSelf: 'center',
        color: '#fff'
    }
});
export default Cart