import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
  items: [], // { id, name, price, quantity }
  total: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: (item) => {},
});

const initialState = {
  items: [], // { id, name, price, quantity }
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id,
      );

      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id,
      );
      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItem = (item) => dispatchCartAction({ type: "ADD_ITEM", item });
  const removeItem = (id) => dispatchCartAction({ type: "REMOVE_ITEM", id });
  const clearCart = () => dispatchCartAction({ type: "CLEAR_CART" });

  console.log({
    items: cart.items,
    total: cart.total,
    addItem,
    removeItem,
    clearCart,
  });

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        total: cart.total,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
