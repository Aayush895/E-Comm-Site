const productReducer = (state, action) => {
  if (action.type === "INITIAL_LOADING_PHASE") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SET_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }

  if (action.type === "SET_DATA") {
    const isFeatureProduct = (product) => {
      return product.featured === true;
    };

    const featureData = action.payload.filter(isFeatureProduct);

    return {
      ...state,
      isLoading: false,
      isError: false,
      product: action.payload,
      featureProducts: featureData,
    };
  }
};

export default productReducer;
