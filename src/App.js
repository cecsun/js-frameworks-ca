import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { Products } from './Pages/Products/Products';
import { RouteNotFound } from './Pages/RouteNotFound/RouteNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

