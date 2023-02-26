import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="bg-white w-72 h-64 p-2 shadow-lg hover:transition duration-300 ease-in-out hover:shadow-2xl hover:bg-slate-300 cursor-pointer">
      <div className="flex">
        <img
          src={img}
          alt="product-img"
          className="h-52 w-[100%] z-0 hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex justify-between mt-3">
        <p className="capitalize text-slate-500">{name}</p>
        <p className="text-slate-500">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;