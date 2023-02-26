import React from "react";
import { currencyConvt } from "../utils/helper";

const FeaturedProductCard = (props) => {
  const INR_PRICE = currencyConvt(props.prodPrice);
  
  return (
    <div className="bg-white w-72 p-2 shadow-lg hover:transition duration-300 ease-in-out hover:shadow-2xl hover:bg-slate-300 cursor-pointer">
      <div className="flex">
        <img
          src={props.prodImg}
          alt="product-img"
          className="h-44 w-[100%] z-0 max-w-xs hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex justify-between mt-3">
        <p className="capitalize text-slate-500">{props.prodName}</p>
        <p className="text-slate-500">{INR_PRICE}</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
