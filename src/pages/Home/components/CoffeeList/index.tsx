import { CoffeeCard } from "../CoffeeCard";
import { coffees } from "../../../../data/coffees";
import { MagnifyingGlass, SmileySad } from "phosphor-react";
import { useState } from "react";

export function CoffeeList() {
  const [coffeesOnSearch, setCoffeesOnSearch] = useState("");
  const [filteredCoffees, setFilteredCoffees] = useState(coffees);

  function handleCoffeeOnSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    setCoffeesOnSearch(searchValue);

    const flteredCoffeesResult = coffees.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCoffees(flteredCoffeesResult);
  }

  return (
    <div className="flex flex-col gap-8 mb-10 ">
      <h1 className="font-Baloo font-bold text-3xl">Nossos cafés</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center bg-base-card w-96 p-3 rounded-md gap-4">
          <MagnifyingGlass />
          <input
            value={coffeesOnSearch}
            onChange={handleCoffeeOnSearch}
            placeholder="busque por cafés"
            type="text"
            className="w-full flex items-center   bg-base-card rounded-md outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {filteredCoffees.length > 0 ? (
          <>
            {filteredCoffees.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />;
            })}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center col-span-10 gap-5 -mt-5">
            <SmileySad size={70} />
            <p className="text-4xl font-Roboto text-base-lable">
              Nenhum resultado encontrado
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
