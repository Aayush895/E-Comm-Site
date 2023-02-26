import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddProdToCart from "./SingleProductSub/AddProdToCart";
import SingleProdImage from "./SingleProductSub/SingleProdImage";
import StarRating from "./SingleProductSub/StarRating";
import { currencyConvt, URL } from "./utils/helper";
import SingleProdShimmer from "./utils/SingleProdShimmer";

const SingleProduct = () => {
  const { prodID } = useParams();
  const [singleProdInfo, setsingleProdInfo] = useState(null);

  const API = URL + "?id=" + prodID;
  const getSingleData = async (url) => {
    try {
      const fetchData = await fetch(url);
      const singleProdData = await fetchData.json();
      setsingleProdInfo(singleProdData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleData(API);
    // eslint-disable-next-line
  }, []);

  const mrp = currencyConvt(singleProdInfo?.price + 250000);
  const price = currencyConvt(singleProdInfo?.price);

  return (
    <>
      {singleProdInfo == null ? (
        <SingleProdShimmer />
      ) : (
        <div className="flex justify-evenly mt-32 mb-44">
          <div className="flex justify-center">
            <SingleProdImage imgArr={singleProdInfo?.image} />
          </div>
          <div className="text-left w-[30rem]">
            <h2 className="text-4xl leading-10 text-slate-600">
              {singleProdInfo?.name}
            </h2>
            <StarRating
              stars={singleProdInfo?.stars}
              reviews={singleProdInfo?.reviews}
            />
            <span className="leading-10">
              MRP:<del>{mrp}</del>
            </span>
            <p className="leading-10 text-indigo-500 text-justify">
              Deal of the Day: {price}
            </p>

            <p className="text-slate-400">{singleProdInfo?.description}</p>

            <div className="border-b flex justify-between mt-4 w-[100%] text-center">
              <div>
                <i className="fa-solid fa-truck-fast bg-slate-100 rounded-full p-3"></i>
                <p className="text-slate-400">Free Delivery</p>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left bg-slate-100 rounded-full p-3"></i>
                <p className="text-slate-400">30 day replacement</p>
              </div>
              <div>
                <i className="fa-solid fa-truck-ramp-box bg-slate-100 rounded-full p-3"></i>
                <p className="text-slate-400">Guranteed Delivery</p>
              </div>
              <div>
                <i className="fa-solid fa-shield-halved bg-slate-100 rounded-full p-3"></i>
                <p className="text-slate-400">2 Year Warranty</p>
              </div>
            </div>

            <div className="mt-8 leading-loose">
              <p className="text-slate-400">
                Available:{" "}
                <span className="text-black">
                  {singleProdInfo?.stock > 0 ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p className="text-slate-400">
                ID: <span className="text-black">{singleProdInfo?.id}</span>
              </p>
              <p className="text-slate-400">
                Brand:{" "}
                <span className="text-black">{singleProdInfo?.company}</span>
              </p>
            </div>

            <div className="mt-5">
              <hr className="bg-gray-400 h-1" />
              <AddProdToCart
                stock={singleProdInfo?.stock}
                id={prodID}
                singleProduct={singleProdInfo}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
