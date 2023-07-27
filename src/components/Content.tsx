import { useApp } from '../store';
import { Cart } from './Cart';
import Catalog from './Catalog';

const Content = () => {
  const { showCart } = useApp();

  return !showCart ? <Catalog /> : <Cart />;
};

export default Content;
