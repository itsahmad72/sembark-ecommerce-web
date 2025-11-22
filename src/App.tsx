import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Suspense fallback={<div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>


      <Toaster position="top-center" reverseOrder={false} />
    </CartProvider>
  );
}

export default App;
