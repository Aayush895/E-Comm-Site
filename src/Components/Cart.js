import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";
import AddedProduct from "./CartSub/AddedProduct";
import { currencyConvt } from "./utils/helper";

const Cart = () => {
  const globalStorage = useContext(CartContext);
  const { cart, clearCart, deliveryFee } = globalStorage;
  const { isAuthenticated, user } = useAuth0();

  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price * cart[i].qty;
  }

  let subTotalINR = currencyConvt(subTotal);
  let shippingFee = currencyConvt(deliveryFee);
  let totalCost = currencyConvt(subTotal + deliveryFee);

  if (cart.length === 0) {
    return (
      <p className="text-4xl text-center mt-32 mb-56 font-light">
        Cart is Empty
      </p>
    );
  }
  return (
    <div className="mt-32 mb-36">
      <div className="flex mt-10 mb-5 ml-20">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Total
        </h3>
      </div>
      <hr />

      <div>
        {cart.map((addedProduct) => {
          return (
            <AddedProduct addedProdInfo={addedProduct} key={addedProduct.id} />
          );
        })}
      </div>
      <hr className="mt-3" />

      <div className="flex justify-around gap-x-[60rem] relative top-20">
        <Link to="/product">
          <p className="bg-indigo-500 w-56 px-4 py-2 text-white text-center cursor-pointer hover:bg-indigo-700 uppercase shadow-lg hover:shadow-xl border-2">
            Continue Shopping
          </p>
        </Link>
        <p
          className="bg-red-400 px-4 py-2 text-center cursor-pointer border-2 shadow-lg hover:shadow-xl hover:bg-red-500 uppercase"
          onClick={() => clearCart()}
        >
          Clear Cart
        </p>
      </div>

      <div className="flex mt-36 justify-between mr-7">
        <div></div>
        <div className="p-10 border-2 bg-slate-200 shadow-md">
          <div className="flex gap-x-10 mb-12 text-slate-500">
            <p>Subtotal: </p>
            <p className="font-bold text-black">{subTotalINR}</p>
          </div>
          <div className="flex gap-x-4 mb-12 text-slate-500">
            <p>Shipping Fee: </p>
            <p className="font-bold text-black">{shippingFee}</p>
          </div>
          <div className="flex gap-x-10 mt-4 text-slate-500">
            <p>Total Fee: </p>
            <p className="font-bold text-black">{totalCost}</p>
          </div>
          <div className="flex justify-center">
            <p
              className="bg-indigo-500 w-32 px-4 py-2 mt-10 text-white text-center cursor-pointer hover:bg-indigo-700"
              onClick={() => {
                isAuthenticated
                  ? alert(`Thank you ${user.name} for Shopping with us`)
                  : alert("Please LogIn to check out of the store");
              }}
            >
              CheckOut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
