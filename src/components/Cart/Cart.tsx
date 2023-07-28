
import React, {useContext} from 'react'
import Catalog from '../Catalog/Catalog';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
  const { cartState } = useContext(CartContext);
  return (
    <Catalog items={cartState.item} />
  )
};