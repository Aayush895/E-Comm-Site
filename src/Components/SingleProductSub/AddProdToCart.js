import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const AddProdToCart = ({ stock, id, singleProduct }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const increaseQty = () => {
    return qty < stock ? setQty(qty + 1) : setQty(qty);
  };

  const decreaseQty = () => {
    return qty > 1 ? setQty(qty - 1) : setQty(1);
  };

  return (
    <>
      <div className="flex justify-between mt-4 mb-5 w-32">
        <i className="fa-solid fa-minus" onClick={decreaseQty}></i>
        <p>{qty}</p>
        <i className="fa-solid fa-plus" onClick={increaseQty}></i>
      </div>
      <div>
      <Link to="/cart">
        <p
          className="bg-indigo-500 w-32 px-4 py-2 text-white cursor-pointer hover:bg-indigo-700"
          onClick={() => {
            addToCart(qty, id, singleProduct, stock);
          }}
        >
          Add To Cart
        </p>
        </Link>
      </div>
    </>
  );
};

export default AddProdToCart;
