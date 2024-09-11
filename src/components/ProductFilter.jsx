import { useProductFilter } from "../contexts/productFilterContext";
export const ProductFilter = () => {
  const { filterDispatch } = useProductFilter();
  return (
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
  );
};
