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

  const productsFilteredByPrice =
    price > 0 ? product.filter((prod) => prod.price <= price) : product;
  const productsFilteredByDiscount =
    discount > 0
      ? productsFilteredByPrice.filter((prod) => prod.discount <= discount)
      : productsFilteredByPrice;
  const productsFilteredByRating =
    rating > 0
      ? productsFilteredByDiscount.filter((prod) => {
          console.log(prod.rating);
          console.log(rating);
          return prod.rating <= rating;
        })
      : productsFilteredByDiscount;
  return (
    <>
      <div>
        <label>Price:</label>
        <input
          onChange={(e) =>
            filterDispatch({ type: "PRICE", payload: e.target.value })
          }
        ></input>
        <label>Discount:</label>
        <input
          onChange={(e) =>
            filterDispatch({ type: "DISCOUNT", payload: e.target.value })
          }
        ></input>
        <label>Rating:</label>
        <input
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        ></input>
      </div>
      <div className="container">
        {productsFilteredByRating.map((prod) => (
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
