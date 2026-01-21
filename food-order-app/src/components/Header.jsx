import { useContext } from "react";
import logo from "../assets/logo.jpg";
import { useCart } from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);

  const cartCtx = useCart();
  const totalItem = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>swiggy</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalItem})
        </Button>
      </nav>
    </header>
  );
}
