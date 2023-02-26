import { createContext, useEffect, useReducer } from "react";
import productReducer from "../Reducers/productReducer";
import { URL } from "../Components/utils/helper";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getDataFromApi = async () => {
    dispatch({ type: "INITIAL_LOADING_PHASE" });
    try {
      const fetchData = await fetch(URL);
      const resData = await fetchData.json();

      dispatch({ type: "SET_DATA", payload: resData });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
