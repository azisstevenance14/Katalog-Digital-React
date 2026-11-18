import React, { useState } from 'react'; // 👈 1. Wajib import useState dan React
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Kontak() {
    // 2. Definisikan state untuk formulir
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        subjek: '',
        pesan: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Terima kasih ${formData.nama}, pesan Anda berhasil dikirim!`);
        setFormData({ nama: '', email: '', subjek: '', pesan: '' });
    };

    return (
        <div className="container py-5 mt-2" id="kontak">
            {/* Header Halaman */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Hubungi Kami</h1>
                <p className="text-muted">
                    Punya pertanyaan seputar layanan IoT Hardware Prototyping atau Web Development?
                    Tim ASSA.dev siap membantu!
                </p>
            </div>

            <div className="row g-4">
                {/* Kolom Formulir Kirim Pesan */}
                <div className="col-lg-7">
                    <div className="card shadow-sm border-0 p-4">
                        <h4 className="fw-bold mb-4">Kirim Pesan</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama anda"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Alamat Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Subjek</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subjek"
                                        value={formData.subjek}
                                        onChange={handleChange}
                                        placeholder="Tanya Jasa Web / Modul IoT"
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Pesan Anda</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="pesan"
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        placeholder="Tuliskan kebutuhan project atau pertanyaanmu di sini..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="submit" className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2">
                                        <FaPaperPlane /> Kirim Pesan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Kolom Informasi Kontak */}
                <div className="col-lg-5">
                    <div className="card shadow-sm border-0 p-4 bg-light h-100">
                        <h4 className="fw-bold mb-4">Informasi Kontak</h4>

                        <div className="d-flex align-items-start mb-4">
                            <div className="bg-primary text-white p-3 rounded-circle me-3">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">Lokasi Kami</h6>
                                <p className="text-muted mb-0">Indonesia, Gorontalo</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <div className="bg-success text-white p-3 rounded-circle me-3">
                                <FaWhatsapp size={20} />
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">WhatsApp Support</h6>
                                <p className="text-muted mb-0">+62 812-XXXX-XXXX</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <div className="bg-danger text-white p-3 rounded-circle me-3">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">Email Resmi</h6>
                                <p className="text-muted mb-0">contact@assa.dev</p>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div>
                            <h6 className="fw-bold mb-2">Jam Operasional</h6>
                            <p className="text-muted mb-1">Senin - Jumat: 08.00 - 17.00 WITA</p>
                            <p className="text-muted">Sabtu & Minggu: Tutup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontak;