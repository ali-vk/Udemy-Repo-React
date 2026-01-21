import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";
import { uiActions } from "./store/ui-slice";
import  Notification  from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const isCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sneding...",
          message: "Sending cart data!",
        }),
      );
      const response = await fetch(
        "https://react-redux-edefc-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data successfully",
        }),
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed!",
        }),
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
