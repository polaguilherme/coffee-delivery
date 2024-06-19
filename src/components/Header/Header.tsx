  import { MapPin, ShoppingCart } from "phosphor-react";
  import coffeeLogo from "../../assets/logo-coffee.svg";
  import { NavLink } from "react-router-dom";
  import { HeaderButton } from "./components/ButtonHeader/Button";
  import { useContext } from "react";
  import { CartContext } from "../../context/CartContext";

  export function Header() {
    const { cartQuantity } = useContext(CartContext);

    return (
      <header className="flex py-8 justify-between ">
        <NavLink to={"/"}>
          <nav>
            <img src={coffeeLogo} alt="logo" />
          </nav>
        </NavLink>

        <nav className="flex gap-3 items-center justify-center">
          <HeaderButton variantColor="purple">
            <span>
              <MapPin size={22} className="text-brand-purple" weight="fill" />
            </span>
            <p className="text-sm text-purple-dark font-Roboto">Criciuma, SC</p>
          </HeaderButton>
          <NavLink to={"/completeOrder"}>
            <div className="relative flex">
              <HeaderButton variantColor="yellow">
                <ShoppingCart
                  className="text-yellow-dark"
                  weight="fill"
                  size={22}
                />
              </HeaderButton>
              {cartQuantity > 0 && (
                <div className="absolute top-[-10px] right-[-10px] rounded-full bg-yellow-dark h-5 w-5 flex items-center justify-center text-white font-Roboto text-xs">
                  {cartQuantity}
                </div>
              )}
            </div>
          </NavLink>
        </nav>
      </header>
    );
  }
