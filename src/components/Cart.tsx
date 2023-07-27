import React from 'react';

import {useStoreCtx} from '../context';
import {ListItems} from './ListItems';

export const Cart = () => {
  const {cart} = useStoreCtx();

  return <ListItems items={cart} />;
};
