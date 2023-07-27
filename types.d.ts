export interface Course {
  title: string;
  id: number;
  price: number;
  description: string;
}

export type CartContextState = {
  appTitle: string;
  courses: Course[];
  total: number;
  showCart: boolean;
  addToCart: (course: Course) => void;
  removeFromCart: (course: Course) => void;
  toggleCart: (showCart: boolean) => void;
};

export type CartReducerAction =
  | {
      type: 'addToCart';
      payload: {course: Course};
    }
  | {
      type: 'removeFromCart';
      payload: {course: Course};
    }
  | {
      type: 'showCartItems';
      payload: {showCart: boolean};
    };

export type CartReducerState = {
  courses: Course[];
  total: number;
  showCart: boolean;
};
