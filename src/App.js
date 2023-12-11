import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import { Routes, Route, Outlet } from "react-router-dom";

import ProductView from "./pages/ProductView";
import "./App.css";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 slidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="products"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productId" element={<ProductView />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
