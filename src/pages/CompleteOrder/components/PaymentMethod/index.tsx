import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export function PaymentMethod() {
  const { handleButtonClick, selectedMethod } = useContext(CartContext);

  return (
    <section>
      <div className="bg-base-card  flex items-start flex-col gap-8 mt-3  p-10">
        <div className="flex items-start gap-2">
          <CurrencyDollar
            size={22}
            weight="fill"
            className="text-brand-purple"
          />
          <div className="flex flex-col">
            <p className="font-Roboto text-base">Pagamento</p>
            <p className="text-base-text text-sm font-Roboto">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <button
            className={`bg-base-button flex items-center gap-3 p-4 rounded-md uppercase flex-1 ${
              selectedMethod === "Cartão de Crédito"
                ? "bg-purple-light border border-brand-purple"
                : ""
            }`}
            onClick={() => handleButtonClick("Cartão de Crédito")}
          >
            <CreditCard size={16} className="text-brand-purple" />
            <p className="text-xs text-base-text"> Cartão de crédito</p>
          </button>
          <button
            className={`bg-base-button flex items-center gap-3 p-4 rounded-md uppercase flex-1 ${
              selectedMethod === "Cartão de Débito"
                ? "bg-purple-light border border-brand-purple"
                : ""
            }`}
            onClick={() => handleButtonClick("Cartão de Débito")}
          >
            <Bank size={16} className="text-brand-purple" />
            <p className="text-xs text-base-text">cartão de débito</p>
          </button>
          <button
            className={`bg-base-button flex items-center gap-3 p-4 rounded-md uppercase flex-1 ${
              selectedMethod === "Dinheiro"
                ? "bg-purple-light border border-brand-purple"
                : ""
            }`}
            onClick={() => handleButtonClick("Dinheiro")}
          >
            <Money size={16} className="text-brand-purple" />
            <p className="text-xs text-base-text"> dinheiro</p>
          </button>
        </div>
      </div>
    </section>
  );
}
