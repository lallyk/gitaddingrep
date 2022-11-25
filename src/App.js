import AvailableProducts from "./components/Products/AvailableProducts";
import "./App.css";
import Header from "./components/Layout/Header";
import ProductsSummary from "./components/Products/ProductsSummary";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <ProductsSummary />
      <AvailableProducts />
    </div>
  );
}

export default App;
