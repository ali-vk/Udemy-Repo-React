import { useContext } from "react";
import { useCart } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);

  const crtCtx = useCart();
  const cartTotal = crtCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  function handleHideCart() {
    userProgressCtx.hideCart();
  }
  function hadleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleHideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {crtCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => crtCtx.addItem(item)}
            onDecrease={() => crtCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {crtCtx.items.length && (
          <Button onClick={hadleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
