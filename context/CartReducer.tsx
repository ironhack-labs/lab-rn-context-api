import { IListItem } from "../components/Content";
import { CartState } from "./CartContext";

type CartAction = 
  | {type: 'ADD_TO_CART', payload: IListItem} 
  | {type: 'REMOVE_FROM_CART', payload: number}


export const cartReducer = (state: CartState, action: CartAction):CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        item: [action.payload, ...state.item]
      }
    case 'REMOVE_FROM_CART': 
    return {
      item: state.item.filter(currentItem => currentItem.id !== action.payload)
    }
    default:
      return state;
  }
  
}