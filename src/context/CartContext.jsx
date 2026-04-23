import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

const cartListReducer = (state, action) => {
  let newCartList = state;

  if (action.type === "ADD_ITEM") {
    return newCartList;
  } else if (action.type === "DELETE_ITEM") {
    return newCartList;
  } else if (action.type === "CLEAR_ITEM") {
    return newCartList;
  }
  return newCartList;
};

const CartListProvider = ({ children }) => {
  const [cartList, dispatchCartList] = useReducer(cartListReducer, []);

  const addItem = (data) => {
    // console.log(data);

    dispatchCartList({
      type: "ADD_ITEM",
    });
  };
  const removeItem = () => {
    dispatchCartList({
      type: "DELETE_ITEM",
    });
  };
  const clearCart = () => {
    dispatchCartList({
      type: "CLEAR_ITEM",
    });
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const DEFAULT = [1, 2, 3, 4, 5, 6, 7, 8];

export default CartListProvider;
