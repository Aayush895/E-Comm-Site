import { createContext, useEffect, useReducer } from "react";
import cartReducer from "../Reducers/cartReducer";
const CartContext = createContext();

const getLocalStorageCartData = () => {
  let newCartItem = localStorage.getItem("ecommCart");
  // if (newCartItem === []) {
  //   return [];
  // } else {
  //   return JSON.parse(newCartItem);
  const parsedData = JSON.parse(newCartItem);
  if (!Array.isArray(parsedData)) {
    return [];
  }
  return parsedData;
};

const initialState = {
  // The below cart is the initial cart used where the item added to the cart did not persist
  // whenever the browser was reloaded
  // cart: [],
  cart: getLocalStorageCartData(),
  deliveryFee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (qty, id, singleProduct, stock) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { qty, id, singleProduct, stock },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Storing the items add to cart in local storage so that whenever we refresh the browser the
  // item still stay inside the cart page.
  useEffect(() => {
    localStorage.setItem("ecommCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
