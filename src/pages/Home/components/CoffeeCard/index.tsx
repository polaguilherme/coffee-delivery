import { ShoppingCart } from "phosphor-react";
import { formattCurrency } from "../../../../utils/formattPrice";
import { QuantityCounter } from "../../../../components/QuantityCounter/QuantityCounter";
import { CartContext } from "../../../../context/CartContext";
import { useContext, useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  price: number;
  photo: string;
  description: string;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addItemOnCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      quantity,
    };
    addItemOnCart(coffeToAdd);
  }

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <div className=" bg-base-card h-72 rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md flex flex-col items-center gap-2">
      <div className="-mt-5 ">
        <img src={`/coffees/${coffee.photo}`} alt="" />
      </div>

      <div className="flex gap-1">
        {coffee.tags.map((tag) => {
          return (
            <span
              className="flex uppercase text-textXsmall bg-yellow-light pt-1 pb-1 pl-2 pr-2 rounded-xl font-semibold text-yellow-dark"
              key={`${coffee.id}${tag}`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div>
        <h1 className="font-Baloo font-semibold text-lg">{coffee.name}</h1>
      </div>
      <div className="w-64 text-center text-base-lable text-sm">
        <p>{coffee.description}</p>
      </div>
      <div className="flex justify-between items-center  w-full pl-6 pr-6 gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-Baloo font-bold">
            {formattCurrency(coffee.price)}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <QuantityCounter
            quantity={quantity}
            onIncrement={handleIncrementQuantity}
            onDecrement={handleDecrementQuantity}
          />
          <div
            onClick={handleAddToCart}
            className="bg-purple-dark text-white p-2 items-center rounded-md cursor-pointer"
          >
            <ShoppingCart weight="fill" className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
