import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                    <span className="badge bg-primary mb-2 p-2">{product.kategori}</span>
                    <h5 className="card-title fw-bold">{product.nama}</h5>
                    <p className="card-text text-muted">{product.deskripsi}</p>
                </div>
                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center pb-3">
                    <span className="fw-bold text-success">{product.harga}</span>
                    <button className="btn btn-outline-primary btn-sm">Detail Produk</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;