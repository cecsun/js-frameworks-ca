import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
// import { Home } from './Pages/Home/Home';
import Home from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { RouteNotFound } from './Pages/RouteNotFound/RouteNotFound';
import { Product } from './Pages/Product/Product';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

