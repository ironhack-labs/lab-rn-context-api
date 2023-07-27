import React from 'react';

import {useStoreCtx} from '../context';
import {ListItems} from './ListItems';

export const Catalog = () => {
  const {items} = useStoreCtx();

  return <ListItems items={items} />;
};
