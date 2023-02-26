import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/filterContext";
import { currencyConvt } from "../utils/helper";
import ProductCardList from "./ProductCardList";

const ListView = () => {
  const globalStorage = useContext(FilterContext);
  const { filterProducts } = globalStorage;
  return (
    <>
      {filterProducts.map((product) => {
        const price = currencyConvt(product?.price);
        return (
          <Link to={"/singleProduct/" + product.id} key={product?.id}>
            <ProductCardList
              id={product?.id}
              img={product?.image}
              name={product?.name}
              price={price}
              desc={product?.description}
            />
          </Link>
        );
      })}
    </>
  );
};

export default ListView;
