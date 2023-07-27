import data from '../../data.json';

import type {Product} from '../types/Product.type';

export const findProduct = (id: number): Product =>
  data.find(product => product.id === id) as Product;
