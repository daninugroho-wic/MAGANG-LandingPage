import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-700 text-white py-4 shadow-md">
                <div className="responsive-wrapper container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">My Website</h1>
                    <nav className="space-x-4">
                        <a href="#home" className="hover:text-blue-300">Home</a>
                        <a href="#about" className="hover:text-blue-300">About</a>
                        <a href="#services" className="hover:text-blue-300">Services</a>
                        <a href="#contact" className="hover:text-blue-300">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Body */}
            <main className="flex-1">
                {/* Hero Section */}
                <section id="home" className="bg-blue-50 text-center py-20">
                    <div className="responsive-wrapper container mx-auto">
                        <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to My Website</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Nama saya Dani, dan ini adalah landing page dengan Tailwind CSS.
                        </p>
                        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
                            Get Started
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-gray-100">
                    <div className="responsive-wrapper container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">About Us</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Kami adalah tim profesional yang siap membantu Anda dengan layanan terbaik. 
                            Misi kami adalah memberikan solusi kreatif untuk semua kebutuhan Anda.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-white">
                    <div className="responsive-wrapper container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-50 shadow-md rounded">
                                <h4 className="text-xl font-semibold text-blue-700">Service 1</h4>
                                <p className="text-gray-600">Deskripsi singkat layanan 1.</p>
                            </div>
                            <div className="p-6 bg-gray-50 shadow-md rounded">
                                <h4 className="text-xl font-semibold text-blue-700">Service 2</h4>
                                <p className="text-gray-600">Deskripsi singkat layanan 2.</p>
                            </div>
                            <div className="p-6 bg-gray-50 shadow-md rounded">
                                <h4 className="text-xl font-semibold text-blue-700">Service 3</h4>
                                <p className="text-gray-600">Deskripsi singkat layanan 3.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 text-black py-10">
                <div className="responsive-wrapper container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Container 1: Tentang Website */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">About Us</h4>
                        <p className="text-sm">
                            My Website adalah platform yang memberikan layanan terbaik untuk kebutuhan Anda. Kami berdedikasi untuk memberikan pengalaman terbaik bagi pengguna.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-300">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-300">
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-300">
                                <i className="fab fa-whatsapp text-lg"></i>
                            </a>
                            <a href="mailto:support@mywebsite.com" className="text-black hover:text-blue-300">
                                <i className="fas fa-envelope text-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Container 2: Navigasi */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#Link1" className="hover:text-blue-300">Link1</a></li>
                            <li><a href="#Link2" className="hover:text-blue-300">Link2</a></li>
                            <li><a href="#Link3" className="hover:text-blue-300">Link3</a></li>
                            <li><a href="#Link4" className="hover:text-blue-300">Link4</a></li>
                        </ul>
                    </div>

                    {/* Bagian Kanan: Kontak */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Contact Us</h4>
                        <p className="text-sm">
                            Email: support@mywebsite.com<br />
                            Phone: +62 812 3456 7890
                        </p>
                    </div>
                </div>
            </footer>

            <footer className="bg-blue-700 text-white py-6">
                <div className="responsive-wrapper container mx-auto text-left">
                    <p> © 2021 — PT Dayamitra Telekomunikasi Tbk.</p>
                </div>
            </footer>
        </div>
    );
}
