import React from 'react';

import {useStoreCtx} from '../context';
import {Catalog} from './Catalog';
import {Cart} from './Cart';

export const Content = () => {
  const {showCart} = useStoreCtx();

  return showCart ? <Cart /> : <Catalog />;
};
