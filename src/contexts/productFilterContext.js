import { useContext, createContext, useReducer } from "react";
import { handleFilterReducer } from "../reducers/handleFilterReducer";

const productFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const initialState = {
    price: "",
    discount: "",
    rating: "",
  };
  const [state, filterDispatch] = useReducer(handleFilterReducer, initialState);

  return (
    <productFilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </productFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(productFilterContext);

export { ProductFilterProvider, useProductFilter };
