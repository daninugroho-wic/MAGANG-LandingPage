import React, { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Home() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header
            style={{ backgroundColor: '#C1BAA1' }}
            className={`text-white py-3 shadow-md fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
                isScrolled ? 'bg-opacity-95' : ''
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex flex-col items-center space-y-1 logo-container">
                    {!isScrolled && (
                        <img
                            src="img/maxnet.png"
                            alt="Logo"
                            className="logo h-10 sm:h-12 md:h-16 w-auto transition-all duration-300"
                        />
                    )}
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-7 items-center">
                    <a
                        href="#home"
                        className="hover:text-[#493628] font-semibold transition duration-300 transform hover:scale-105"
                    >
                        Home
                    </a>
                    {/* About Us Dropdown */}
                    <div className="relative group">
                        <button className="hover:text-[#493628] font-semibold transition duration-300 transform hover:scale-105">
                            About Us
                        </button>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48 rounded-lg z-10">
                            <a
                                href="#sejarah"
                                className="block px-4 py-2 text-[#493628] hover:bg-[#ECEBDE] transition duration-300"
                            >
                                Sejarah
                            </a>
                            <a
                                href="#visi"
                                className="block px-4 py-2 text-[#493628] hover:bg-[#ECEBDE] transition duration-300"
                            >
                                Visi & Misi
                            </a>
                        </div>
                    </div>
                    <a
                        href="#hubungi"
                        className="hover:text-[#493628] font-semibold transition duration-300 transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                    <a
                        href="#esg"
                        className="hover:text-[#493628] font-semibold transition duration-300 transform hover:scale-105"
                    >
                        Layanan
                    </a>
                </nav>

                {/* Language Switcher */}
                <div className="hidden md:flex items-center space-x-2">
                    <button className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1 hover:border-red-500 transition duration-300">
                        <img src="img/flagin.png" alt="ID" className="h-4" />
                        <span>ID</span>
                    </button>
                    <button className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1 hover:border-red-500 transition duration-300">
                        <img src="img/flagen.png" alt="EN" className="h-4" />
                        <span>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col bg-blue py-2 px-9 space-y-2 shadow-lg text-right">
                        <a
                            href="#home"
                            className="hover:text-[#493628] font-semibold transition duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#tentang"
                            className="hover:text-[#493628] font-semibold transition duration-300"
                        >
                            About Us
                        </a>
                        <a
                            href="#hubungi"
                            className="hover:text-[#493628] font-semibold transition duration-300"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#esg"
                            className="hover:text-[#493628] font-semibold transition duration-300"
                        >
                            Layanan
                        </a>
                    </nav>
                </div>
            )}
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
                                    backgroundImage: "url('/img/wallpap3.jpg')",
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
                                    backgroundImage: "url('/img/wallpap4.jpg')",
                                }}
                            >
                                <div className="text-left">
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
                                    backgroundImage: "url('/img/wallpap5.jpg')",
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem accusamus dolore doloribus eos facere maxime eius fugiat! Corporis temporibus alias, tempora sapiente laudantium quo consequatur illum sit doloremque perferendis.
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
                <section 
                    id="services" 
                    className="py-20 bg-white bg-fixed" 
                    style={{ backgroundImage: 'url(/img/back1.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                >
                    <div className="responsive-wrapper container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-5">Mitra Terbaik</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Service 1 */}
                            <div className="p-6">
                                <img
                                    src="/img/xl.png"
                                    alt="Service 1"
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                                <p className="text-gray-600">Deskripsi singkat layanan 1.</p>
                            </div>
                            {/* Service 2 */}
                            <div className="p-6">
                                <img
                                    src="/img/smartfren.png"
                                    alt="Service 2"
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                                <p className="text-gray-600">Deskripsi singkat layanan 2.</p>
                            </div>
                            {/* Service 3 */}
                            <div className="p-6">
                                <img
                                    src="/img/telkomsel.png" 
                                    alt="Service 3"
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                                <p className="text-gray-600">Deskripsi singkat layanan 3.</p>
                            </div>
                            {/* Service 4 */}
                            <div className="p-6">
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
            <footer style={{ backgroundColor: '#A59D84' }} className="text-[#493628] py-10">
                <div className="responsive-wrapper container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Container 1: Tentang Website */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">About Us</h4>
                        <p className="text-sm">
                            My Website adalah platform yang memberikan layanan terbaik untuk kebutuhan Anda. Kami berdedikasi untuk memberikan pengalaman terbaik bagi pengguna.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#493628] hover:text-white">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#493628] hover:text-white">
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#493628] hover:text-white">
                                <i className="fab fa-whatsapp text-lg"></i>
                            </a>
                            <a href="mailto:support@mywebsite.com" className="text-[#493628] hover:text-white">
                                <i className="fas fa-envelope text-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Container 2: Navigasi */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#Link1" className="hover:text-white">Link1</a></li>
                            <li><a href="#Link2" className="hover:text-white">Link2</a></li>
                            <li><a href="#Link3" className="hover:text-white">Link3</a></li>
                            <li><a href="#Link4" className="hover:text-white">Link4</a></li>
                        </ul>
                    </div>

                    {/* Bagian Kanan: Kontak */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Contact Us</h4>
                        <p className="text-sm">
                            Email: info@maxnetplus.id<br/>
                            Phone: +62-271-340-6262    
                        </p>
                    </div>
                </div>
            </footer>

            <footer style={{ backgroundColor: '#A59D84' }} className="text-[#493628] py-6">
                <div className="responsive-wrapper container mx-auto text-left">
                    <p> © 2024 — PT Ligkar Kabel Telekomunikasi.</p>
                </div>
            </footer>
        </div>
    );
}