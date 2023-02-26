import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../Context/filterContext";

const Search = () => {
  const [input, setInput] = useState("");
  const globalStorage = useContext(FilterContext);
  const { products, filterProduct } = globalStorage;

  useEffect(() => {
    filterProduct(products, input);
    // eslint-disable-next-line
  }, [input]);

  return (
    <div className="w-56 rounded-lg border-black  border-2 flex p-2">
      <input
        type="text"
        name="search"
        placeholder="Search Something"
        className="border-transparent focus:outline-none"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </div>
  );
};

export default Search;
