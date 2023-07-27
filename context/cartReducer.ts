import {types, ReducerState, ActionType} from '../types/types';

export const cartReducer = (
  state: ReducerState,
  action: ActionType,
): ReducerState => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case types.REMOVE:
      return {
        ...state,
        products: state.products?.filter(
          product => product.id !== action.payload.id,
        ),
      };

    case types.TOGGLE:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};
