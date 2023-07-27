import React, { ReactNode, useReducer } from 'react'
import CartContext from './cartContext'
import CartReducer, { State } from './cartReducer'
import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from '.'
import { IListItem } from '../../../components/Content'


const CartContextProvider = ({ children }: { children: ReactNode }) => {

    const initialState: State = {
        cart: null,
        showCart: false
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (item: IListItem) => {
        const newCartArray = state.cart ? state.cart : []
        newCartArray.push(item)

        dispatch({
            type: ADD_TO_CART,
            payload: newCartArray!
        })
    }

    const removeFromCart = (item: IListItem) => {
        const newCartArray = state.cart ? state.cart : []
        const index = newCartArray.findIndex((cartItem) => cartItem.id === item.id)
        if (index == -1) return
        newCartArray.splice(index, 1)

        dispatch({
            type: REMOVE_FROM_CART,
            payload: newCartArray.length > 0 ? newCartArray : null
        })
    }

    const checkIfExist = (itemToCheck: IListItem) => {
        if (!state.cart) return false

        return state.cart.filter(item => item.id === itemToCheck.id).length > 0
    }

    const calculateTotal = () => {
        if (!state.cart) return '0.0'
        return state.cart?.reduce((acc, item) => {
            return acc + item.price
        }, 0).toFixed(2)
    }

    const toggleCart = () => {
        dispatch({
            type: TOGGLE_CART,
            payload: !state.showCart
        })
    }

    return (
        <CartContext.Provider value={{
            cart: state.cart,
            showCart: state.showCart,
            addToCart,
            checkIfExist,
            removeFromCart,
            calculateTotal,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider