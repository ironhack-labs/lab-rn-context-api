import { CartActionsEnum } from './actions';
import { ICartActions, ICartContext } from './interface';

const reducer = (state: ICartContext, action: ICartActions): ICartContext => {
  switch (action.type) {
    case CartActionsEnum.ADD_TO_CART:
      const _cart = [...state.cart];
      _cart.push(action.payload);
      return {...state, cart: _cart};
    case 'REMOVE_FROM_CART':
      let _cartRemove = [...state.cart];
      _cartRemove = _cartRemove.filter(item => item.id !== action.payload.id);
      return {...state, cart: _cartRemove};
    case 'TOGGLE_CART':
      return {...state, showCart: !state.showCart};
    default:
      return state;
  }
};

export default reducer;
