import { useReducer } from "react";
import { product } from "../database/products";
import { handleFilterReducer } from "../reducers/handleFilterReducer";

export const ProductsPage = () => {
  const initialState = {
    price: "",
    discount: "",
    rating: "",
  };

  const [{ price, discount, rating }, filterDispatch] = useReducer(
    handleFilterReducer,
    initialState
  );

  let productsFilteredByPrice =
    price > 0 ? product.filter((prod) => prod.price <= price) : product;

  return (
    <>
      <div>
        <label>Price:</label>
        <input
          onChange={(e) =>
            filterDispatch({ type: "PRICE", payload: e.target.value })
          }
        ></input>
      </div>
      <div className="container">
        {productsFilteredByPrice.map((prod) => (
          <div className="product" key={prod.id}>
            <p>{prod.productName}</p>
            <p>
              {prod.price} || {prod.discount} || {prod.rating}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
