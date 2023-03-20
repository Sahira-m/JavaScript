import {Routes,Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProductItem from "./components/product/ProductItem";
import ProductList from "./components/product/ProductList"
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return <div>
  
    <div>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home  />} /> 
        {/* <Route path="/" element={<ProductList  />} /> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/productList" element={<ProductList />} /> */}
      </Routes>
    </div>
    </div>;
}

export default App;
