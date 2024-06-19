import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { cartItemsReducer, CartState } from "../reducer/cart/reducer";
import {
  addItemInCart,
  updateItemQuantity,
  removeItemOnCart,
  cleanCart,
} from "../reducer/cart/actions";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  removeItem: (id: number) => void;
  updateItemQuantityOnCart: (
    id: number,
    type: "decrement" | "increment"
  ) => void;
  addItemOnCart: (coffee: CartItem) => void;
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  cartItemsTotalWithShipping: number;
  selectedMethod: string | null;
  setSelectedMethod: (method: string) => void;
  handleButtonClick: (method: string) => void;
  cleanItemsOnCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartItemsReducer, {
    cartItems: [],
  } as CartState);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    const storedCartItems = JSON.stringify(cartState.cartItems);
    localStorage.setItem("@coffee-delivery:cart-items-1.0.0", storedCartItems);
  }, [cartState]);

  function handleButtonClick(method: string) {
    setSelectedMethod(method);
  }

  function addItemOnCart(coffee: CartItem) {
    dispatch(addItemInCart(coffee));
  }

  function updateItemQuantityOnCart(
    id: number,
    type: "decrement" | "increment"
  ) {
    dispatch(updateItemQuantity(id, type));
  }

  function removeItem(id: number) {
    dispatch(removeItemOnCart(id));
  }

  function cleanItemsOnCart() {
    dispatch(cleanCart());
  }

  const shipping: number = 3.5;

  const cartQuantity = cartState.cartItems.length;

  const cartItemsTotal = cartState.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const cartItemsTotalWithShipping = cartItemsTotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        cartQuantity,
        cartItemsTotal,
        addItemOnCart,
        cartItemsTotalWithShipping,
        updateItemQuantityOnCart,
        removeItem,
        selectedMethod,
        setSelectedMethod,
        handleButtonClick,
        cleanItemsOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
