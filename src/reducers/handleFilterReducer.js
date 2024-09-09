export const handleFilterReducer = (productFilter, action) => {
  switch (action.type) {
    case "PRICE":
      return { ...productFilter, price: action.payload };
    case "DISCOUNT":
      return { ...productFilter, discount: action.payload };
    case "RATING":
      return { ...productFilter, rating: action.payload };
    default:
      return productFilter;
  }
};
