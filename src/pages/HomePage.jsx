import React from 'react';
import Kontak from '../components/Kontak'
function HomePage() {
    return (
        <>
            <div className="container text-center py-5">
                <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
                    <h1 className="display-5 fw-bold">Selamat Datang di Digital Catalog</h1>
                    <p className="fs-4 text-secondary">
                        Pusat layanan solusi IoT Hardware Prototyping dan Full-Stack Web Development.
                    </p>
                </div>
            </div>
            <Kontak />
        </>
    );
}

export default HomePage;