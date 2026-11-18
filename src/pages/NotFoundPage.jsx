import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="container text-center py-5">
            <div className="py-5">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h2 className="mb-3">Oops! Halaman Tidak Ditemukan</h2>
                <p className="text-muted mb-4">
                    URL yang kamu ketik tidak terdaftar di sistem katalog kami.
                </p>
                <Link to="/" className="btn btn-primary">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;