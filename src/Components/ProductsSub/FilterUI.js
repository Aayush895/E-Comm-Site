import React, { useContext, useState } from "react";
import { FilterContext } from "../../Context/filterContext";

import Dropdown from "./DropDown";
import FilterTypes from "./FilterTypes";
import GridView from "./GridView";
import ListView from "./ListView";
import Search from "./Search";
import Shimmer from "../utils/Shimmer";

const FilterUI = () => {
  // We will have to create a context for filtering because to assign various filter methods we will have to pass down the props
  // in mulitple components and we will also use the useReducer hook because for different filter methods we will have to create
  // different states for filter which will be dependent on the original products array which will make state management quite
  // complex and may even give us error.

  const [gridView, setGridView] = useState(true);
  const globalStorage = useContext(FilterContext);
  const { isLoading } = globalStorage;

  return (
    <>
      <div className="flex justify-around gap-x-56  mt-10 mb-10">
        <Search />
        <div className="space-x-4">
          <i
            className={"fa-solid fa-border-all cursor-pointer" + (gridView ? " text-purple-500" : "text-black cursor-pointer")}
            onClick={() => {
              setGridView(true);
            }}
          ></i>
          <i
            className={"fa-solid fa-list cursor-pointer" + (gridView ? " text-black" : " text-purple-500 cursor-pointer")}
            onClick={() => {
              setGridView(false);
            }}
          ></i>
        </div>

        <Dropdown />
      </div>
      <div className="flex justify-evenly">
        <div className="mt-10 text-left">
          <FilterTypes />
        </div>

        {isLoading ? (
          <div className="w-[70%] mt-10 flex justify-center items-center">
            <Shimmer />
          </div>
        ) : gridView ? (
          <div className="flex flex-wrap w-[70%] mt-10 gap-y-4 gap-x-4 ">
            <GridView />
          </div>
        ) : (
          <div className="w-[70%] mt-10 text-left">
            <ListView />
          </div>
        )}
      </div>
    </>
  );
};

export default FilterUI;
