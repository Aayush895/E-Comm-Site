import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../Context/filterContext";

const Dropdown = () => {
  const [sortVal, setSortVal] = useState("reset");
  const globalStorage = useContext(FilterContext);
  const { products, sort } = globalStorage;

  const setSelectVal = (e) => {
    setSortVal(e.target.value);
  };

  useEffect(() => {
    sort(sortVal, products);

    // eslint-disable-next-line
  }, [sortVal]);

  return (
    <div className="">
      <select
        name="sort"
        id="sort"
        className="focus:outline-none border-2 border-black rounded-md p-1"
        onChange={setSelectVal}
      >
        <option value="lowest">Price(Lowest)</option>
        <option value="highest">Price(Highest)</option>
        <option value="a-z">Price(a-z)</option>
        <option value="z-a">Price(z-a)</option>
      </select>
    </div>
  );
};

export default Dropdown;