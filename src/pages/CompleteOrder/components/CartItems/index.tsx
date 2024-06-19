import { CircleNotch, Coffee, ShoppingCartSimple, Trash } from "phosphor-react";
import { QuantityCounter } from "../../../../components/QuantityCounter/QuantityCounter";
import { useContext, useState } from "react";
import {
  CartContext,
  CartItem as CartItemTypes,
} from "../../../../context/CartContext";
import { formattCurrency } from "../../../../utils/formattPrice";
import { useFormContext } from "react-hook-form";
import { FormCompleteValidationData } from "../FormCompleteOrder";
import { useNavigate } from "react-router-dom";

interface CoffeeCartCardProps {
  cartItems: CartItemTypes[];
  message?: string | null;
}

export function CartItem({ cartItems, message }: CoffeeCartCardProps) {
  const [loadingState, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext<FormCompleteValidationData>();
  const {
    cartItemsTotal,
    cartItemsTotalWithShipping,
    removeItem,
    updateItemQuantityOnCart,
    selectedMethod,
  } = useContext(CartContext);

  function handleRemoveItemOnCart(itemId: number) {
    removeItem(itemId);
  }

  function handleDecrement(id: number) {
    updateItemQuantityOnCart(id, "decrement");
  }

  function handleIncrement(id: number) {
    updateItemQuantityOnCart(id, "increment");
  }

  function onSubmit(data: FormCompleteValidationData) {
    setLoading(true);

    navigate("/orderConfirmed", {
      state: data,
    });
  }

  function handleLoadingAndNavigate() {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div className="bg-base-card rounded-md flex flex-col rounded-tr-[2.75rem] rounded-bl-[2.75rem] p-10 w-[28rem] h-auto">
      {message ? (
        <div className="flex flex-col items-center justify-center h-full gap-4 ">
          <ShoppingCartSimple size={40} className="text-base-lable" />
          <p className="text-base text-center items-center font-Baloo">
            {message}
          </p>

          <button
            onClick={handleLoadingAndNavigate}
            className="bg-brand-purple text-white font-Baloo flex items-center gap-2 justify-center w-64 p-2 rounded-md"
          >
            {loadingState ? (
              <>
                <div className="flex items-start gap-10">
                  <CircleNotch className="animate-spin" />
                </div>
              </>
            ) : (
              <>
                <Coffee size={22} />
                <p>cafés</p>
              </>
            )}
          </button>
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <div className="flex items-center gap-5">
              <img src={`/coffees/${item.photo}`} alt="" className="size-16" />
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-base-subtitle text-base font-Roboto">
                    {item.name}
                  </h1>
                  <div className="flex gap-2">
                    <QuantityCounter
                      onDecrement={() => handleDecrement(item.id)}
                      onIncrement={() => handleIncrement(item.id)}
                      quantity={item.quantity}
                    />
                    <button
                      onClick={() => handleRemoveItemOnCart(item.id)}
                      className="flex items-center p-2 bg-base-button rounded-md gap-1"
                    >
                      <Trash className="size-4 text-brand-purple" />
                      <p className="text-base-text text-xs">REMOVER</p>
                    </button>
                  </div>
                </div>
                <div className="flex font-bold text-base text-base-text">
                  {formattCurrency(item.price)}
                </div>
              </div>
            </div>
            <div className="border border-solid border-base-button mt-6 mb-6"></div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-3">
              <p className="text-sm">Total de itens</p>
              <p className="text-sm">Entrega</p>
              <h1 className="font-bold text-xl">Total</h1>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base text-end">
                {formattCurrency(cartItemsTotal)}
              </p>
              <p className="text-base text-right">R$ 3,50</p>
              <h1 className="font-bold text-xl">
                {formattCurrency(cartItemsTotalWithShipping)}
              </h1>
            </div>
          </div>
          <button
            type="submit"
            disabled={!selectedMethod}
            className="flex items-center w-full bg-brand-yellow font-bold text-white rounded-md uppercase justify-center p-3 cursor-pointer mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            confirmar pedido
          </button>
        </form>
      )}
    </div>
  );
}
