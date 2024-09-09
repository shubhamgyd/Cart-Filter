export const handleFilterReducer = (productFilter, action) => {
  switch (action.type) {
    case "PRICE":
      console.log(action.payload);
      return { ...productFilter, price: action.payload };
    default:
      return productFilter;
  }
};
