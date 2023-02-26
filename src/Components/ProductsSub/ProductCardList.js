import React from "react";
import { Link } from "react-router-dom";

const ProductCardList = ({ id, img, name, price, desc }) => {
  return (
    <div className="flex flex-col items-center bg-slate-100 border shadow-lg md:flex-row w-[100%] my-4 p-2 hover:bg-slate-300 hover:shadow-xl">
      <img
        className="h-52 w-[30%] z-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        src={img}
        alt="product-img"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-500">
          {name}
        </h5>
        <p className="text-slate-500">{price}</p>
        <p className="mb-3 font-normal text-gray-400 ">
          {desc.slice(0, 90)} ...
        </p>
        <Link to={"/singleProduct/" + id}>
          <p className="text-left bg-indigo-500 w-28 px-4 py-2 text-white cursor-pointer hover:bg-indigo-700">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardList;
