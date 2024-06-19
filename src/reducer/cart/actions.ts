import { CartItem } from "../../context/CartContext";

export enum ActionTypes {
  ADD_ITEM_ON_CART = "ADD_ITEM_ON_CART",
  UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  CLEAN_CART = "CLEAN_CART",
}

export function addItemInCart(newItemCart: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_ON_CART,
    payload: {
      newItemCart,
    },
  };
}

export function updateItemQuantity(
  id: number,
  type: "decrement" | "increment"
) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY,
    payload: {
      id,
      type,
    },
  };
}

export function removeItemOnCart(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
}

export function cleanCart() {
  return {
    type: ActionTypes.CLEAN_CART,
  };
}
