import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { currencyConvt } from "../utils/helper";

const AddedProduct = ({ addedProdInfo }) => {
  const total = currencyConvt(addedProdInfo.price * addedProdInfo.qty);
  const price = currencyConvt(addedProdInfo.price);
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 ml-10">
      <div className="flex w-2/5">
        <div className="w-32">
          <img className="h-24 w-32" src={addedProdInfo.img} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{addedProdInfo.name}</span>
          <span className="font-semibold hover:text-red-500 text-gray-500 text-xs">
            <i
              className="fa-solid fa-trash cursor-pointer"
              onClick={() => removeItem(addedProdInfo.id)}
            ></i>
          </span>
        </div>
      </div>

      <div className="flex justify-center w-1/5">
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={addedProdInfo.qty}
          readOnly={true}
        />
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{total}</span>
    </div>
  );
};

export default AddedProduct;
