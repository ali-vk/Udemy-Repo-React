import { useContext } from "react";
import { useCart } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  //   body: JSON.stringify({
  //     order: {
  //       items: crtCtx.items,
  //       customer: customerData,
  //     },
  //   }),
};

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const crtCtx = useCart();

  const {
    data,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = crtCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    crtCtx.clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: crtCtx.items,
          customer: customerData,
        },
      }),
    );
  }

  const [formState, formAction, pending] =  useActionState(checkoutAction, null)

  let actions = (
    <>
      <Button onClick={handleClose} type="button" textOnly>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (pending) {
    actions = <span>Sending data ...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within next few
          minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" messsa={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
