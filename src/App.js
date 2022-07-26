import './App.css';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage  from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import HeaderFooter from './components/HeaderFooter';
import NotFound from './components/NotFound';
import ProductsPage from './components/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderFooter /> }>
              <Route index element={<WelcomePage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/:id' element={<ProductDetailsPage id={3} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
