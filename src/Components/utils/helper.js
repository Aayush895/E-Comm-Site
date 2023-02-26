export const currencyConvt = (price) => {
  const value = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price / 100);
  
  return value;
};

export const URL = 'https://api.pujakaitem.com/api/products';
