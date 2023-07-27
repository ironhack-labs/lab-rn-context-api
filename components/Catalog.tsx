import React from "react";
import { List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import data from '../data.json';
import { useCartContextProvider } from "../hooks/context";
import { IListItem } from '../Interfaces/interface'
import RenderItemAccessory from "./RenderItemAccessory";

const Catalog = () => {
    const { addToCart, removeFromCart, cartItems } = useCartContextProvider();
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
                }): React.ReactElement => {
                    return (
                        <ListItem
                            title={`${item.title} | $${item.price}`}
                            description={`${item.description} ${index + 1}`}
                            accessoryRight={RenderItemAccessory(async () => {
                                !!cartItems.find((i) => i.id == item.id) ? removeFromCart(item.id) : addToCart({ ...item })
                            }, !!cartItems.find((i) => i.id == item.id))} />
                    );
                }}
            />)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Catalog
