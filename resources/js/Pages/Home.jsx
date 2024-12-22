import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-700 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
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
                <section id="home" className="h-screen flex items-center justify-center">
            {/* Swiper Slider */}
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="h-full w-full"
                loop={true}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/img/wallpap.jpg')",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="text-7xl font-bold text-white mb-4">
                                Welcome to My Website
                            </h1>
                            <p className="text-lg text-blue-700 mb-6">
                                Nama saya Dani, dan ini adalah landing page dengan Tailwind CSS.
                            </p>
                            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/img/wallpap1.jpg')",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="text-7xl font-bold text-white mb-4">
                                Explore Our Services
                            </h1>
                            <p className="text-lg text-blue-700 mb-6">
                                Kami menawarkan layanan terbaik untuk kebutuhan Anda.
                            </p>
                            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/img/wallpap2.jpg')",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="text-7xl font-bold text-white mb-4">
                                Join Us Today
                            </h1>
                            <p className="text-lg text-blue-700 mb-6">
                                Bergabunglah dengan komunitas kami dan nikmati manfaatnya.
                            </p>
                            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Join Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>




                {/* About Section */}
                <section id="about" className="py-20 bg-gray-100">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Kolom 1: Teks */}
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">About Us</h3>
                                <p className="text-lg text-gray-600">
                                    Kami adalah tim profesional yang siap membantu Anda dengan layanan terbaik. 
                                    Misi kami adalah memberikan solusi kreatif untuk semua kebutuhan Anda.
                                </p>
                            </div>

                                {/* Kolom 2: Gambar */}
                                <div className="flex justify-center">
                            <img 
                                src="/img/wallpap.jpg" 
                                alt="About Us" 
                                className="rounded-lg shadow-md"
                            />
                        </div>  
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-gray-100">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Kolom 1: Gambar */}
                        <div className="flex justify-center">
                            <img 
                                src="/img/wallpap.jpg" 
                                alt="About Us" 
                                className="rounded-lg shadow-md"
                            />
                        </div>

                        {/* Kolom 2: Teks */}
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">About Us</h3>
                            <p className="text-lg text-gray-600">
                                Kami adalah tim profesional yang siap membantu Anda dengan layanan terbaik. 
                                Misi kami adalah memberikan solusi kreatif untuk semua kebutuhan Anda.
                            </p>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="contact" className="py-20 text-white bg-[url('/img/wallpap.jpg')] bg-cover bg-center">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Kolom Kiri: Informasi dan Teks */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <div className="bg-white rounded-full p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 10h11M9 21v-7M9 3v1m0 15v1m0-6H3m6 0h11"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa yang bisa kami bantu?</h2>
                            <p className="text-lg">
                                Silakan isi form di samping untuk memberikan pesan.
                            </p>
                        </div>

                        {/* Kolom Kanan: Formulir */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">General Information</h3>
                            <form action="#" method="POST" className="space-y-4">
                                {/* Nama */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone & Website */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                                        <input
                                            type="url"
                                            id="website"
                                            name="website"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                                        />
                                    </div>
                                </div>

                                {/* Pesan */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                                        required
                                    ></textarea>
                                </div>

                                {/* Tombol Kirim */}
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>




                {/* Services Section */}
                <section id="services" className="py-20 bg-white">
    <div className="responsive-wrapper container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Mitra Terbaik</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-gray-50 shadow-md rounded">
                <img
                    src="/img/xl.png"
                    alt="Service 1"
                    className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-gray-600">Deskripsi singkat layanan 1.</p>
            </div>
            {/* Service 2 */}
            <div className="p-6 bg-gray-50 shadow-md rounded">
                <img
                    src="/img/smartfren.png"
                    alt="Service 2"
                    className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-gray-600">Deskripsi singkat layanan 2.</p>
            </div>
            {/* Service 3 */}
            <div className="p-6 bg-gray-50 shadow-md rounded">
                <img
                    src="/img/telkomsel.png" 
                    alt="Service 3"
                    className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-gray-600">Deskripsi singkat layanan 3.</p>
            </div>
            {/* Service 4 */}
            <div className="p-6 bg-gray-50 shadow-md rounded">
                <img
                    src="/img/indosat.png"
                    alt="Service 4"
                    className="w-full h-40 object-cover rounded mb-4"
                />
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
