import React, {ReactNode, createContext, useContext} from 'react';
import {
  StoreContext,
  useContextStore,
  initialContextValue,
} from './use-store-context';

const storeContext = createContext<StoreContext>(initialContextValue);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const ctxValue = useContextStore();

  return (
    <storeContext.Provider value={ctxValue}>{children}</storeContext.Provider>
  );
};

export const useStoreCtx = () => {
  const ctxValue = useContext(storeContext);

  if (!ctxValue) {
    throw new Error('storeContext must be use whitin the StoreProvider');
  }

  return ctxValue;
};
