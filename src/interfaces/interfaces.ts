export type ProductReducerActions =
  | {
      type: 'ADD_TO_CART';
      payload: IListItem;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: IListItem['id'];
    };

export type ProductContextProps = {
  cart: IListItem[];
  dispatch: React.Dispatch<ProductReducerActions>;
};

export interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

export interface HomeProps {
  setShowCart: (isShow: boolean) => void;
}
