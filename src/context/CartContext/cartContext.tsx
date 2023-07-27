import { createContext } from "react";
import { State } from "./cartReducer";

const cartContext = createContext<State>({ cart: [], showCart: false })

export default cartContext