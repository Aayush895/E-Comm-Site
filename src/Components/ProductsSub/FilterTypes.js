import React, { useContext, useEffect } from "react";
import { FilterContext } from "../../Context/filterContext";

const FilterTypes = () => {
  const globalStorage = useContext(FilterContext);
  const {
    products,
    filterMobProduct,
    filterLaptopProduct,
    filterCompProduct,
    filterAccesoriesProduct,
    filterWatchProduct,
    resetFilter,
  } = globalStorage;

  useEffect(() => {
    const nav_link = document.querySelector("#category");
    const links = nav_link.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      <h3 className="font-bold">Category</h3>
      <ul className="mt-10 mb-24" id="category">
        <li
          className="mt-5 cursor-pointer nav-link active"
          onClick={() => resetFilter(products)}
        >
          All
        </li>

        <li
          className="mt-5 cursor-pointer nav-link"
          onClick={() => filterLaptopProduct(products)}
        >
          Laptop
        </li>
        <li
          className="mt-5 cursor-pointer nav-link"
          onClick={() => filterCompProduct(products)}
        >
          Computer
        </li>
        <li
          className="mt-5 cursor-pointer nav-link"
          onClick={() => filterAccesoriesProduct(products)}
        >
          Accessories
        </li>
        <li
          className="mt-5 cursor-pointer nav-link"
          onClick={() => filterWatchProduct(products)}
        >
          Watch
        </li>

        <li
          className="mt-5 cursor-pointer nav-link"
          onClick={() => filterMobProduct(products)}
        >
          Mobile
        </li>
      </ul>

      <p
        className="bg-red-400 px-4 py-2 cursor-pointer border-2 shadow-lg hover:shadow-xl hover:bg-red-500 uppercase"
        onClick={() => resetFilter(products)}
      >
        Clear Filter
      </p>
    </>
  );
};

export default FilterTypes;
