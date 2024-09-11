import { useContext, createContext, useReducer } from "react";
import { handleFilterReducer } from "../reducers/handleFilterReducer";

const initialState = {
  price: "",
  discount: "",
  rating: "",
};
const productFilterContext = createContext(initialState);

const ProductFilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(handleFilterReducer, initialState);

  return (
    <productFilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </productFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(productFilterContext);

export { ProductFilterProvider, useProductFilter };
