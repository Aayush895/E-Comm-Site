import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/productContext";
import Shimmer from "../utils/Shimmer";
import FeaturedProductCard from "./FeaturedProductCard";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useContext(AppContext);

  return (
    <div className="mt-16 mb-16 bg-slate-100 py-20">
      <div className="text-left mb-20 mx-36">
        <h3 className="uppercase">Check Now!</h3>
        <h2 className="text-4xl">Our Featured Products</h2>
      </div>

      {isLoading === true ? (
        <Shimmer />
      ) : (
        <div className="flex justify-center space-x-32">
          {featureProducts.map((product, index) => {
            return (
              <Link to={"/singleProduct/" + product.id} key={product.id}>
                <FeaturedProductCard
                prodImg={product?.image}
                prodName={product?.name}
                prodPrice={product?.price}
                prodCat={product?.category}
              />
              </Link>
              
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FeatureProducts;
