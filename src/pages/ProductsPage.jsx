import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';

function ProductsPage() {
    return (
        <>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Katalog Produk Digital & Jasa</h1>
                    <p className="text-muted">Pilih produk atau layanan IoT & Web Development sesuai kebutuhanmu.</p>
                </div>

                <div className="row">
                    {productsData.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
                <button className='btn btn-primary'>
                    <Link className="nav-link" to="/">Beranda</Link>
                </button>
            </div>
        </>
    );
}

export default ProductsPage;