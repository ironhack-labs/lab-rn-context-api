import React, { createContext, useReducer, useContext, useEffect } from 'react';

type ItemCart = {
    title: string;
    id: number;
    price: number;
    description: string;
}

type CartState = {
    cartItems: ItemCart[] | [];
    toggleCart: boolean;
    cartTotal: number;
    addToCart: (itemCart: ItemCart) => void;
    removeFromCart: (id: number) => void;
    changeCartVisibility: () => void;
}

type ReducerState = {
    cartItems: ItemCart[] | [];
    toggleCart: boolean;
    cartTotal: number;
}
type Action =
    | {
        type: 'ADD_ITEM';
        payload: { itemCart: ItemCart[] };
    }
    | {
        type: 'DELETE_ITEM';
        payload: { itemCart: ItemCart[] }
    } | {
        type: 'TOGGLE_CART';
        payload: { toggleCart: boolean }
    } | {
        type: 'TOTAL';
        payload: { cartTotal: number }
    };


const initialCartContext = {
    cartItems: [], toggleCart: false, cartTotal: 0, addToCart: () => { }, removeFromCart: () => { }, changeCartVisibility: () => { }
}

const CartContext = createContext<CartState>(initialCartContext);

const cartReducer = (state: ReducerState, action: Action): ReducerState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, cartItems: [...action.payload.itemCart] };
        case 'DELETE_ITEM':
            return { ...state, cartItems: [...action.payload.itemCart] };
        case 'TOGGLE_CART':
            return { ...state, toggleCart: action.payload.toggleCart }
        case 'TOTAL':
            return { ...state, cartTotal: action.payload.cartTotal }
        default:
            return state;
    }
};

export const CartContextProvider = ({ ...props }) => {

    const [{ cartItems, toggleCart, cartTotal }, dispatch] = useReducer(cartReducer, initialCartContext);

    useEffect(() => {
        calculateCartTotal()
    }, [cartItems])

    const addToCart = (item: ItemCart) => {
        const newCartArray = cartItems ? cartItems : []
        newCartArray.push(item);
        dispatch({ type: 'ADD_ITEM', payload: { itemCart: newCartArray! } });
    };

    const removeFromCart = (id: number) => {
        const newCartArray = cartItems ? cartItems.filter(item => item.id !== id) : [];
        dispatch({ type: 'DELETE_ITEM', payload: { itemCart: newCartArray } });
    }

    const changeCartVisibility = () => {
        const changeCart = !toggleCart;
        dispatch({ type: 'TOGGLE_CART', payload: { toggleCart: changeCart } });
    }

    const calculateCartTotal = () => {
        let sum = 0;
        for(let item of cartItems){
            sum = sum+ item.price
        }
        dispatch({ type: 'TOTAL', payload: { cartTotal: sum } })
    }

    const value = { cartItems, toggleCart, cartTotal, addToCart, removeFromCart, changeCartVisibility };

    return (
        <CartContext.Provider {...props} value={value} />
    );
};
export const useCartContextProvider = () => {
    const contextCart = useContext(CartContext);
    if (!contextCart) {
        throw new Error('useAppCtx must be use within the AppCtxProvider');
    }
    return contextCart;
}
