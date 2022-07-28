import './App.css';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage  from './components/cart-page/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import HeaderFooter from './components/header-footer/HeaderFooter';
import NotFound from './components/NotFound';
import ProductsPage from './components/products/ProductsPage';
import ProductDetailsPage from './components/products/ProductDetailsPage';
import WelcomePage from './components/WelcomePage';
import AllowCheckout from './components/checkout/AllowCheckout';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderFooter /> }>
              <Route index element={<WelcomePage />} />
              <Route path='/products'>                
                <Route path='/products/:id' element={<ProductDetailsPage />} />
                <Route index element={<ProductsPage />} />
              </Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path='/checkout' element={<AllowCheckout>
                  <CheckoutPage />
                </AllowCheckout>} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
