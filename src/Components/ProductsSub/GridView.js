import React, { useContext } from "react";
import { FilterContext } from "../../Context/filterContext";
import ProductCard from "./ProductCard";
import { currencyConvt } from "../utils/helper";
import { Link } from "react-router-dom";

const GridView = () => {
  const globalStorage = useContext(FilterContext);
  const { filterProducts } = globalStorage;
  return (
    <>
      {filterProducts.map((product) => {
        const price = currencyConvt(product?.price);
        return (
          <Link to={"/singleProduct/" + product.id} key={product?.id}>
            <ProductCard
              img={product?.image}
              name={product?.name}
              price={price}
            />
          </Link>
        );
      })}
    </>
  );
};

export default GridView;
