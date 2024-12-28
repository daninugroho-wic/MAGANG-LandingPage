import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            {/* Body */}
            <main className="flex-1">
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
                                        Welcome to Maxnet
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

                {/* About Section */}
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Kolom 1: Teks */}
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                About Us
                            </h3>
                            <p className="text-lg text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem autem accusamus dolore
                                doloribus eos facere maxime eius fugiat!
                                Corporis temporibus alias, tempora sapiente
                                laudantium quo consequatur illum sit doloremque
                                perferendis.
                            </p>
                        </div>

                        {/* Kolom 2: Gambar */}
                        <div className="flex justify-center">
                            <img
                                src="/img/business.png"
                                alt="About Us"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}

                <section className="py-20 bg-white">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-20">
                        Sekilas Informasi
                    </h3>
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            {/* Kolom Kiri: Informasi Utama */}
                            <div className="bg-green-500 text-white p-[30%]">
                                <h2 className="text-3xl font-bold mb-4">
                                    Kenapa Memilih Produk Kami ?
                                </h2>
                                <p className="mb-6">
                                    "Kami berkomitmen memberikan solusi terbaik
                                    untuk kebutuhan Anda dengan kualitas premium
                                    dan layanan yang terpercaya. Pilih produk
                                    kami untuk kenyamanan, efisiensi, dan
                                    kepuasan yang maksimal."
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>

                            {/* Kolom-Kolom Kanan */}
                            <div className="p-8 text-center bg-[url('/img/p1.png')] bg-cover bg-full">
                                <div className="mb-4">
                                    <div className="bg-green-100 rounded-full p-4 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-green-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12h6m2 6H7m12-6a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Kecepatan Tanpa Batas
                                </h3>
                                <p className="text-gray-600">
                                    "Didesain khusus untuk memberikan performa
                                    optimal tanpa lag, produk kami memastikan
                                    pengalaman gaming Anda berjalan lancar
                                    bahkan di momen paling intens!. Fitur ini
                                    sudah dilengkapi dengan teknologi
                                    anti-buffering untuk gaming non-stop."
                                </p>
                            </div>

                            <div className="p-8 text-center bg-[url('/img/p2.png')] bg-cover bg-full border-l-2 border-green-500">
                                <div className="mb-4">
                                    <div className="bg-green-100 rounded-full p-4 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-green-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c2.28 0 4.08 1.82 4.08 4.08S14.28 16.16 12 16.16 7.92 14.34 7.92 12.08 9.72 8 12 8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Solusi Untuk Bisnis Anda
                                </h3>
                                <p className="text-gray-600">
                                    "Tingkatkan produktivitas dengan layanan
                                    kami yang dapat diintegrasikan langsung ke
                                    workflow bisnis Anda. Hemat waktu dan biaya
                                    dengan solusi yang dirancang khusus untuk
                                    perusahaan Anda."
                                </p>
                            </div>
                            <div className="p-8 text-center bg-[url('/img/p3.png')] bg-cover bg-full border-l-2 border-green-500">
                                <div className="mb-4">
                                    <div className="bg-green-100 rounded-full p-4 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-green-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Inovasi dan Teknologi Modern
                                </h3>
                                <p className="text-gray-600">
                                    "Kami terus berinovasi dengan teknologi
                                    terbaru untuk memastikan Anda selalu
                                    mendapatkan yang terbaik. Dengan kualitas
                                    premium dan fitur canggih, produk kami siap
                                    mendukung Anda dalam berbagai kebutuhan."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-20 bg-white">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                            Services
                        </h3>
                        <p className="text-gray-600 font-light mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium delectus temporibus aspernatur
                            error doloribus. Explicabo facilis, ducimus
                            laudantium fuga non a numquam laborum dolore.
                            Obcaecati aspernatur placeat fuga perspiciatis
                            inventore?
                        </p>
                        <div className="border-b-2 border-green-500"></div>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src="/img/service/internet.png"
                                        alt="Service 1 Icon"
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    Global Peer Internet Access
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Unde vel, vero earum qui
                                    id minus inventore, nemo eum similique
                                    labore provident illum, sapiente nesciunt
                                    quibusdam minima! Odit excepturi illum
                                    veritatis.
                                </p>
                                <a
                                    href="#"
                                    className="text-green-600 font-semibold text-sm"
                                >
                                    Read more &rarr;
                                </a>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src="/img/service/speed.png"
                                        alt="Service 2 Icon"
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    High Speed Internet Access
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repudiandae pariatur quia
                                    dolor tempora non explicabo ratione rerum
                                    repellat qui aliquam, commodi dolorem
                                    ducimus cumque possimus nihil error
                                    laudantium quaerat ab!
                                </p>
                                <a
                                    href="#"
                                    className="text-green-600 font-semibold text-sm"
                                >
                                    Read more &rarr;
                                </a>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src="/img/service/document.png"
                                        alt="Service 3 Icon"
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    Domestic CDN Connectivity
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur dolorum
                                    expedita quam repellendus blanditiis
                                    perferendis labore iusto, nemo iste non sed
                                    dolor maxime quo temporibus dignissimos
                                    eveniet. Nemo, maiores dicta.
                                </p>
                                <a
                                    href="#"
                                    className="text-green-600 font-semibold text-sm"
                                >
                                    Read more &rarr;
                                </a>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src="/img/service/datacenter.png"
                                        alt="Service 4 Icon"
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    Colocation Service Datacenter
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nihil quae eligendi aut
                                    commodi id deserunt voluptatum sit minus
                                    odit dolorum, architecto ab, ipsum repellat
                                    cupiditate veniam est nam. Quod, dicta.
                                </p>
                                <a
                                    href="#"
                                    className="text-green-600 font-semibold text-sm"
                                >
                                    Read more &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="services"
                    className="py-20 bg-white bg-fixed"
                    style={{
                        backgroundImage: "url(/img/wallpap7.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="responsive-wrapper container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-5">
                            Mitra Terbaik
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6">
                                <img
                                    src="/img/xl.png"
                                    alt="Service 1"
                                    className="w-full h-39 object-cover rounded mb-4"
                                />
                            </div>
                            <div className="p-6">
                                <img
                                    src="/img/smartfren.png"
                                    alt="Service 2"
                                    className="w-full h-39 object-cover rounded mb-4"
                                />
                            </div>
                            <div className="p-6">
                                <img
                                    src="/img/telkomsel.png"
                                    alt="Service 3"
                                    className="w-full h-39 object-cover rounded mb-4"
                                />
                            </div>
                            <div className="p-6">
                                <img
                                    src="/img/indosat.png"
                                    alt="Service 4"
                                    className="w-full h-39 object-cover rounded mb-4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="py-20 text-white bg-[url('/img/wallpap.jpg')] bg-cover bg-center"
                >
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Apa yang bisa kami bantu?
                            </h2>
                            <p className="text-lg">
                                Silakan isi form di samping untuk memberikan
                                pesan.
                            </p>
                        </div>

                        {/* Kolom Kanan: Formulir */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                General Information
                            </h3>
                            <form
                                action="#"
                                method="POST"
                                className="space-y-4"
                            >
                                {/* Nama */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Your Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-green-100 focus:outline-none focus:border-green-500 transition duration-300"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-green-100 focus:outline-none focus:border-green-500 transition duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone & Website */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Phone*
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-green-100 focus:outline-none focus:border-green-500 transition duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="website"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Website
                                        </label>
                                        <input
                                            type="url"
                                            id="website"
                                            name="website"
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-green-100 focus:outline-none focus:border-green-500 transition duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Pesan */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-gray-700"
                                    >
                                        Message*
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-green-100 focus:outline-none focus:border-green-500 transition duration-300"
                                        required
                                    ></textarea>
                                </div>

                                {/* Tombol Kirim */}
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-green-500"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
