import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "."
import { IListItem } from "../../../components/Content"

type Payload = boolean | null | IListItem[]

export type State = {
    cart: IListItem[] | null,
    showCart: boolean,
    addToCart?: (item: IListItem) => void,
    checkIfExist?: (item: IListItem) => boolean,
    removeFromCart?: (item: IListItem) => void,
    calculateTotal?: () => number | string,
    toggleCart?: () => void
}

type Action = {
    payload: Payload,
    type: string
}

export default (state: State, action: Action): State => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: action.payload as IListItem[] }
        case REMOVE_FROM_CART:
            return { ...state, cart: action.payload as IListItem[]}
        case TOGGLE_CART:
            return { ...state, showCart: action.payload as boolean}
        default:
            return state
    }
}