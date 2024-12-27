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
        </div>
    );
}
