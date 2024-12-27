import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React from "react";
import Navbar from "./components/Navbar"; 

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            {/* Body */}
            <main className="flex-1">
            <section id="home">Home Section</section>
                <section id="sejarah">Sejarah Section</section>
                <section id="visi">Visi & Misi Section</section>
                <section id="hubungi">Hubungi Section</section>
                <section id="esg">ESG Section</section>
                {/* Hero Section */}
                <section
                    id="home"
                    className="h-screen flex items-center justify-center"
                >
                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Pagination, Autoplay]} // Tambahkan Autoplay
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 10000, // Waktu jeda antar slide (ms)
                            disableOnInteraction: false, // Tetap autoplay meskipun pengguna berinteraksi
                        }}
                        loop={true}
                        className="h-full w-full"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div
                                className="h-full bg-cover bg-center flex items-center justify-center"
                                style={{
                                    backgroundImage: "url('/img/wallpap3.jpg')",
                                }}
                            >
                                <div className="text-center">
                                    <h1 className="text-7xl font-bold text-white mb-4">
                                        Welcome to My Website
                                    </h1>
                                    <p className="text-lg text-blue-700 mb-6">
                                        Nama saya Dani, dan ini adalah landing
                                        page dengan Tailwind CSS.
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
                                    backgroundImage: "url('/img/wallpap4.jpg')",
                                }}
                            >
                                <div className="text-left">
                                    <h1 className="text-7xl font-bold text-white mb-4">
                                        Explore Our Services
                                    </h1>
                                    <p className="text-lg text-blue-700 mb-6">
                                        Kami menawarkan layanan terbaik untuk
                                        kebutuhan Anda.
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
                                    backgroundImage: "url('/img/wallpap5.jpg')",
                                }}
                            >
                                <div className="text-center">
                                    <h1 className="text-7xl font-bold text-white mb-4">
                                        Join Us Today
                                    </h1>
                                    <p className="text-lg text-blue-700 mb-6">
                                        Bergabunglah dengan komunitas kami dan
                                        nikmati manfaatnya.
                                    </p>
                                    <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>
            {/* Footer */}
            <footer
                style={{ backgroundColor: "#AAD9BB" }}
                className="py-10 text-gray-700"
            >
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Logo dan Kontak */}
                    <div>
                        <img
                            src="/img/maxnet.png"
                            alt="Logo Mitratel"
                            className="mx-auto md:mx-0 w-40 mb-4"
                        />
                        <div className="text-sm">
                            <p>Telkom Landmark Tower, Lantai 25-27</p>
                            <p>
                                Jl. Gatot Subroto Kav. 52 Jakarta, 12710,
                                Indonesia
                            </p>
                            <p className="mt-2">Phone: (021) 2793 3363</p>
                            <p>Fax: 021 2277 0817</p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:mitratel@mitratel.co.id"
                                    className="text-blue-500 hover:underline"
                                >
                                    mitratel@mitratel.co.id
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-bold mb-2">About</h4>
                        <p className="text-sm">
                            PT Dayamitra Telekomunikasi Tbk. or Mitratel is a
                            subsidiary of PT Telkom Indonesia (Persero) Tbk
                            which is engaged in telecommunications
                            infrastructure.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500"
                            >
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500"
                            >
                                <i className="fab fa-facebook text-lg"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500"
                            >
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500"
                            >
                                <i className="fab fa-linkedin text-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-2">Portfolio</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#company-overview"
                                    className="hover:text-blue-500"
                                >
                                    Company Overview
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tower-related"
                                    className="hover:text-blue-500"
                                >
                                    Tower Related
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tower-leasing"
                                    className="hover:text-blue-500"
                                >
                                    Tower Leasing
                                </a>
                            </li>
                        </ul>

                        <h4 className="text-xl font-bold mt-6 mb-2">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#home" className="hover:text-blue-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#career"
                                    className="hover:text-blue-500"
                                >
                                    Career
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sitemap"
                                    className="hover:text-blue-500"
                                >
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            <footer className="bg-green-500 text-black py-6">
                <div className="responsive-wrapper container mx-auto text-left">
                    <p> © 2024 — PT Ligkar Kabel Telekomunikasi.</p>
                </div>
            </footer>
        </div>
    );
}
