import {useReducer} from 'react';

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const UseReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
};

export default UseReducer;
