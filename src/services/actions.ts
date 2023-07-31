import { IListItem } from './interface';

export enum CartActionsEnum {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  TOGGLE_CART = 'TOGGLE_CART',
}

const CartActions = {
  ADD_TO_CART: (cart: IListItem) => ({
    type: CartActionsEnum.ADD_TO_CART,
    payload: cart,
  }),
  REMOVE_FROM_CART: (cart: IListItem) => ({
    type: CartActionsEnum.REMOVE_FROM_CART,
    payload: cart,
  }),
  TOGGLE_CART: () => ({
    type: CartActionsEnum.TOGGLE_CART,
    payload: null,
  }),
};

export default CartActions;
