import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import Halaman (Pages)
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Global */}
      <Navbar />

      {/* Tempat Menampilkan Halaman Berdasarkan URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produk" element={<ProductsPage />} />
        {/* 2. Tangkap semua URL ngawur dan arahkan ke NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer Sederhana */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;