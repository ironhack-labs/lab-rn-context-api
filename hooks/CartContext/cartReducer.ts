import {CartReducerAction, CartReducerState} from '../../types';

const initialCartReducerValue: CartReducerState = {
  courses: [],
  total: 0,
  showCart: false,
};

const cartReducer = (
  state: CartReducerState,
  action: CartReducerAction,
): CartReducerState => {
  switch (action.type) {
    case 'addToCart': {
      const {course} = action.payload;
      return {
        ...state,
        courses: [...state.courses, course],
        total: state.total + course.price,
      };
    }
    case 'removeFromCart': {
      const {course} = action.payload;
      const {id: courseId, price} = course;
      return {
        ...state,
        courses: state.courses.filter(({id}) => id !== courseId),
        total: Math.abs(state.total - price),
      };
    }
    case 'showCartItems': {
      const {showCart} = action.payload;
      return {...state, showCart};
    }
    default:
      return state;
  }
};

export {cartReducer, initialCartReducerValue};
