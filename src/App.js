import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout/index.jsx';
import HomePage from './Pages/HomePage/index.jsx';
import SingleProductPage from './Pages/SingleProductPage/index.jsx';
import Contact from './Pages/Contact/index.jsx';
import CheckoutPage from './Pages/CheckoutPage/index.jsx';
import CheckoutSuccessPage from './Pages/CheckoutSuccessPage/index.jsx';
import RouteNotFound from './Pages/RouteNotFound/RouteNotFound';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/checkoutPage" element={<CheckoutPage />} />
            <Route path="/checkoutSuccessPage" element={<CheckoutSuccessPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

