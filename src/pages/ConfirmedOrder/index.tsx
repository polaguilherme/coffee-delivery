import successOrderSend from "../../assets/Illustration.png";
import { Header } from "./components/Header";
import { Orderinfo } from "./components/OrderInfo";

export function ConfirmedOrder() {
  return (
    <section className="mt-20 flex gap-10">
      <div className="flex flex-col gap-10 flex-1">
        <Header />
        <Orderinfo />
      </div>
      <div className="flex items-center">
        <img src={successOrderSend} alt="Pedido enviado com sucesso" />
      </div>
    </section>
  );
}
