
import { IListItem } from "../components/Catalog/Catalog";
import { CartState } from "./CartContext";

type CartAction = 
  | {type: 'ADD_TO_CART', payload: IListItem} 
  | {type: 'REMOVE_FROM_CART', payload: number}
  | {type: 'SHOW_CART', payload: boolean}


export const cartReducer = (state: CartState, action: CartAction):CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        item: [action.payload, ...state.item],
        showCart: false,
      }

    case 'REMOVE_FROM_CART': 
    return {
      item: state.item.filter(currentItem => currentItem.id !== action.payload),
      showCart: true
    }

    case 'SHOW_CART':
      return {
        item: [...state.item],
        showCart: action.payload
      }
    default:
      return state;
  }
  
}