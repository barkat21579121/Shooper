import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Card from "./pages/Card";
import LoginSignUp from "./pages/LoginSignUp";
import Footer from "./components/footer/Footer";
import men_banner from '../src/components/Assets/banner_mens.png'
import women_banner from '../src/components/Assets/banner_women.png'  
import kids_banner from '../src/components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productID" element={<Product />} />
          <Route />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
