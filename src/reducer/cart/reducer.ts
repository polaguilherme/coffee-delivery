import { produce } from "immer";
import { CartItem } from "../../context/CartContext";
import { ActionTypes } from "./actions";

export interface CartState {
  cartItems: CartItem[];
}

export function cartItemsReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_ON_CART:
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.newItemCart);
      });

    case ActionTypes.UPDATE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex !== -1) {
          if (action.payload.type === "increment") {
            draft.cartItems[itemIndex].quantity += 1;
          } else if (
            action.payload.type === "decrement" &&
            draft.cartItems[itemIndex].quantity > 0
          ) {
            draft.cartItems[itemIndex].quantity -= 1;
          }
        }
      });

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      });

    case ActionTypes.CLEAN_CART:
      return produce(state, (draft) => {
        draft.cartItems = [];
      });

    default:
      return state;
  }
}
