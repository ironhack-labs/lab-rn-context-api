import { IListItem } from '../../components/Content';
import {CartContext, CartState} from './CartContext';

type CartAction =
  | {type: 'addToCart'; payload: IListItem}
  | {type: 'removeFromCart'; payload : IListItem}
  | {type: "toggleCart"}

// generaEstado
export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case 'addToCart':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };

    case 'removeFromCart':
      return {
        ...state,
        items: state.items.filter((item, index) => item !== action.payload)
      };

    case "toggleCart" :
      return {
        ...state,
        showCart : !state.showCart
      }

    default:
      return state;
  }
};
