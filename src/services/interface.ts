import {CartActionsEnum} from './actions';

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

export interface ICartContext {
   cart: IListItem[];
   showCart: boolean;
}

export interface ICartActions {
  type: CartActionsEnum;
  payload: any;
}
