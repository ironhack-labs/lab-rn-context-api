import React from 'react';
import CoursesShopList from './CoursesShopList';
import {useCartContext} from '../hooks/CartContext';

const Cart = () => {
  const {courses} = useCartContext();
  return <CoursesShopList data={courses} />;
};

export default Cart;
