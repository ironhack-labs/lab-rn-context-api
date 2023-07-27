export interface Item {
    title: string;
    id: number;
    price: number;
    description: string;
  }

  export interface IListItem {
    title: string;
    id: number;
    price: number;
    description: string;
    quantity: number;
  }

  export interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    quantity: number;
  }