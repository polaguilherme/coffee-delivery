import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { FormCompleteValidationData } from "../../../CompleteOrder/components/FormCompleteOrder";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";

export function Orderinfo() {
  const { selectedMethod } = useContext(CartContext);
  const location = useLocation();
  const state = location.state as FormCompleteValidationData;

  return (
    <div className="flex flex-col rounded-bl-[2.5rem] rounded-tr-[2.5rem] rounded-tl-md rounded-br-md w-[32rem] p-10 gap-8 border ">
      <div className="flex items-center gap-3">
        <div className="bg-brand-purple rounded-full text-white p-2">
          <MapPin weight="fill" className="size-4" />
        </div>
        <div className="flex flex-col ">
          <p className="text-base-text text-base">
            Entrega em{" "}
            <strong>
              {state.street}, {state.number}
            </strong>{" "}
          </p>
          <p>
            {state.neighborhood} - {state.city}, {state.state}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-brand-yellow rounded-full text-white p-2">
          <Timer weight="fill" className="size-4" />
        </div>
        <div className="flex flex-col">
          <p className="text-base-text text-base">
            Previsão de entrega
            <p className="text-base-text text-base">20 min - 30 min</p>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-yellow-dark rounded-full text-white p-2">
          <CurrencyDollar weight="fill" className="size-4" />
        </div>
        <div className="flex flex-col">
          <p className="text-base-text text-base">Pagamento na Entrega</p>
          <strong>{selectedMethod}</strong>
        </div>
      </div>
    </div>
  );
}
