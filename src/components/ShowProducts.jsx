import { product } from "../database/products";
import { useProductFilter } from "../contexts/productFilterContext";
export const ShowProducts = () => {
  const { state } = useProductFilter();
  const { price, discount, rating } = state;
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
  );
};
