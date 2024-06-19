import background from "../../../../assets/background.png";
import coffeeImage from "../../../../assets/coffeeImage.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Header() {
  return (
    <section className="flex justify-between items-center gap-14 h-[544px]">
      <img
        src={background}
        alt=""
        className="absolute max-sm:hidden left-0 w-full h-full -z-10"
      />
      <div className="flex flex-col gap-16 z-20 relative">
        <div className="flex flex-col gap-4">
          <h1 className="font-Baloo font-extrabold text-5xl max-w-xl ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl font-Roboto">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-yellow-dark p-2 text-white">
              <ShoppingCart className="size-4" weight="fill" />
            </div>
            <p className="text-base-text font-Roboto">
              Compra simples e segura
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-base-text p-2 text-white">
              <Package className="size-4" weight="fill" />
            </div>
            <p className="text-base-text font-Roboto text-base">
              Embalagem mantém o café intacto
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-brand-yellow p-2 text-white">
              <Timer className="size-4" weight="fill" />
            </div>
            <p className="text-base-text font-Roboto text-base">
              Entrega rápida e rastreada
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-brand-purple p-2 text-white">
              <Coffee className="size-4" weight="fill" />
            </div>
            <p className="text-base-text font-Roboto text-base">
              Entrega rápida e rastreada
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={coffeeImage} alt="" />
      </div>
    </section>
  );
}
