import "./App.css";
import { ProductsPage } from "./components/ProductsPage.jsx";
import { ProductFilterProvider } from "./contexts/productFilterContext.js";

function App() {
  return (
    <>
      <ProductFilterProvider>
        <ProductsPage />
      </ProductFilterProvider>
    </>
  );
}

export default App;
