const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOADING_PHASE":
        return {
          ...state,
          isLoading: true,
        };
  
      case "ERROR_PHASE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case "RENDERING_DATA":
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
          filterProducts: action.payload,
        };
  
      case "SEARCH_FILTER":
        const filteredData = action.payload.productArr.filter((product) => {
          return action.payload.input.toLowerCase() === ""
            ? product
            : product.name
                .toLowerCase()
                .includes(action.payload.input.toLowerCase());
        });
  
        return {
          ...state,
          isLoading: false,
          filterProducts: filteredData,
        };
  
      case "MOBILE_FILTER":
        const mobileData = action.payload.filter((mobileProduct) => {
          return mobileProduct?.category === "mobile";
        });
        return {
          ...state,
          filterProducts: mobileData,
        };
  
      case "LAPTOP_FILTER":
        const laptopData = action.payload.filter((laptopProduct) => {
          return laptopProduct?.category === "laptop";
        });
        return {
          ...state,
          filterProducts: laptopData,
        };
  
      case "COMPUTER_FILTER":
        const compData = action.payload.filter((compProduct) => {
          return compProduct?.category === "computer";
        });
        return {
          ...state,
          filterProducts: compData,
        };
  
      case "ACCESSORIES_FILTER":
        const accessData = action.payload.filter((accessProduct) => {
          return accessProduct?.category === "accessories";
        });
        return {
          ...state,
          filterProducts: accessData,
        };
  
      case "WATCH_FILTER":
        const watchData = action.payload.filter((watchProduct) => {
          return watchProduct?.category === "watch";
        });
        return {
          ...state,
          filterProducts: watchData,
        };
  
      case "RESET_FILTER":
        return {
          ...state,
          filterProducts: action.payload,
        };
  
      case "SORT_ON_DROPDOWN":
        let sortedData = action.payload.products;
  
        if (action.payload.dropDownVal === "lowest") {
          sortedData = action.payload.products.sort((a, b) => {
            return a.price - b.price;
          });
        }
  
        if (action.payload.dropDownVal === "highest") {
          sortedData = action.payload.products.sort((a, b) => {
            return b.price - a.price;
          });
        }
  
        if (action.payload.dropDownVal === "a-z") {
          sortedData = action.payload.products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        }
  
        if (action.payload.dropDownVal === "z-a") {
          sortedData = action.payload.products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        }
  
        return {
          ...state,
          filterProducts: sortedData,
        };
      default:
        return state;
    }
  };
  
  export { filterReducer };