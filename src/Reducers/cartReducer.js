const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    // Receive the payload
    let { qty, id, singleProduct, stock } = action.payload;

    let existingProd = state.cart.find((currItem) => {
      return currItem.id === id;
    });

    // if a duplicate product does exist then just run the map method and if the element you are 
    // currently on, it's id is equal to the duplicate products id then just update the products qty 
    // instead of adding it again and if there is no duplicate product then add the product in the cart
    //  array.

    if (existingProd) {
      let updateQty = state.cart.map((currElem) => {
        if (currElem.id === existingProd.id) {
          let newQty = currElem.qty + qty;
          if (newQty >= stock) {
            newQty = stock;
          }
          return {
            ...currElem,
            qty: newQty,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: updateQty,
      };
    } else {
      let cartItem = {
        name: singleProduct.name,
        price: singleProduct.price,
        qty: qty,
        id: id,
        img: singleProduct.image[0].url,
      };

      return { ...state, cart: [...state.cart, cartItem] };
    }
  }

  if (action.type === "REMOVE_FROM_CART") {
    let updatedCart = state.cart.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
