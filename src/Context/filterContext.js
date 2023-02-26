import { createContext, useEffect, useReducer } from "react";
import { filterReducer } from "../Reducers/filterReducer";
const FilterContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  filterProducts: [],
};
const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const URL = "https://api.pujakaitem.com/api/products";
  const fetchApiData = async (url) => {
    dispatch({ type: "LOADING_PHASE" });
    try {
      const fetchRawData = await fetch(url);
      const jsonData = await fetchRawData.json();
      dispatch({ type: "RENDERING_DATA", payload: jsonData });
    } catch (error) {
      dispatch({ type: "ERROR_PHASE" });
    }
  };

  useEffect(() => {
    fetchApiData(URL);
  }, []);

  // Whatever items we want to filter based on the requirement remember this we only have to make changes
  // in the filter array or `filterProducts` in this project. We don't have to create different arrays
  // for different filter categories.

  // Live Filter items from the input provided in the search-bar
  const filterProduct = (productArr, input) => {
    dispatch({ type: "SEARCH_FILTER", payload: { productArr, input } });
  };

  // Filter items with the category of mobile when clicked on it
  const filterMobProduct = (totalProducts) => {
    dispatch({ type: "MOBILE_FILTER", payload: totalProducts });
  };

  // Filter items with the category of Laptop
  const filterLaptopProduct = (totalProducts) => {
    dispatch({ type: "LAPTOP_FILTER", payload: totalProducts });
  };

  // Filter items with the category of Computer
  const filterCompProduct = (totalProducts) => {
    dispatch({ type: "COMPUTER_FILTER", payload: totalProducts });
  };

  // Filter items with the category of Accessories
  const filterAccesoriesProduct = (totalProducts) => {
    dispatch({ type: "ACCESSORIES_FILTER", payload: totalProducts });
  };

  // Filter items with the category of Watch
  const filterWatchProduct = (totalProducts) => {
    dispatch({ type: "WATCH_FILTER", payload: totalProducts });
  };

  // Reset items to display all the products from all categories
  const resetFilter = (totalProducts) => {
    dispatch({ type: "RESET_FILTER", payload: totalProducts });
  };

  // Sort items based on the value in drop-down menu
  const sort = (dropDownVal, products) => {
    dispatch({ type: "SORT_ON_DROPDOWN", payload: { dropDownVal, products } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        filterProduct,
        filterMobProduct,
        filterLaptopProduct,
        filterCompProduct,
        filterAccesoriesProduct,
        filterWatchProduct,
        resetFilter,
        sort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };