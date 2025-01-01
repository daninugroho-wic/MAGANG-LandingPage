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
            <main className="flex-1">
                <section
                    id="home"
                    className="h-screen flex items-center justify-center"
                >
                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="h-full w-full"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div
                                className="h-full bg-cover bg-center flex items-center justify-center relative"
                                style={{
                                    backgroundImage: "url('/img/wallpap3.jpg')",
                                }}
                            >
                                {/* Overlay gradasi */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
                                {/* Konten utama */}
                                <div className="text-center z-10 px-4">
                                    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
                                        Fiber Optic Specialist
                                    </h1>
                                    <p className="text-base md:text-lg text-white font-bold mb-6 max-w-2xl mx-auto">
                                        Teknisi spesialis fiber optik dengan
                                        keahlian dalam instalasi dan
                                        troubleshooting.
                                    </p>
                                    <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div
                                className="h-full bg-cover bg-center flex items-center justify-center relative"
                                style={{
                                    backgroundImage: "url('/img/wallpap4.jpg')",
                                }}
                            >
                                {/* Overlay gradasi */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
                                {/* Konten utama */}
                                <div className="text-left z-10 px-4">
                                    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
                                        Installation And Maintenance
                                    </h1>
                                    <p className="text-base md:text-lg text-white font-bold mb-6 max-w-2xl mx-auto">
                                        Instalasi dan pemeliharaan sistem fiber
                                        optik yang handal.
                                    </p>
                                    <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div
                                className="h-full bg-cover bg-center flex items-center justify-center relative"
                                style={{
                                    backgroundImage: "url('/img/wallpap5.jpg')",
                                }}
                            >
                                {/* Overlay gradasi */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
                                {/* Konten utama */}
                                <div className="text-center z-10 px-4">
                                    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
                                        Join Us "Pusat Kreasi"
                                    </h1>
                                    <p className="text-base md:text-lg text-white font-bold mb-6 max-w-2xl mx-auto">
                                        Bergabunglah dengan pusat kreatif kami.
                                    </p>
                                    <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* ABOUT */}
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

                        <div className="flex justify-center">
                            <img
                                src="/img/business.png"
                                alt="About Us"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* SERVICES*/}
                <section className="py-20 bg-white">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-20">
                        Our Exciting Service Offerings
                    </h3>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="bg-blue-500 text-gray-600 text-justify text-white p-[15%]">
                                <h2 className="text-3xl font-bold mb-4">
                                    Why Us ?
                                </h2>
                                <p>
                                    <p className="mb-6">
                                        We Are Expertise in this job,
                                    </p>
                                    <p className="mb-6">
                                        We are a team of seasoned professionals
                                        with extensive expertise in the field of
                                        fiber optic installation and
                                        maintenance.
                                    </p>
                                    <p className="mb-6">
                                        Our skilled technicians bring years of
                                        experience, ensuring top-notch service
                                        and optimal performance for your network
                                        infrastructure.
                                    </p>
                                    <p className="mb-6">
                                        We understand that every business has
                                        unique needs. Our team works closely
                                        with clients to tailor fiber optic
                                        solutions that align with your specific
                                        requirements. Whether it's a small-
                                        scale installation or a large-scale
                                        network, we've got you covered.
                                    </p>
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>

                            <div className="bg-blue-50 p-8 text-center bg-[url('/img/p1.png')] bg-cover bg-full">
                                <div className="mb-4">
                                    <div className="bg-blue-100 rounded-full p-4 inline-block">
                                        <img
                                            src="/img/service/fiber1.png"
                                            alt="Gambar"
                                            className="h-8 w-8 object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Fiber Optic Instalation
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    Trust our expert team to handle the seamless
                                    installation of fiber optic networks. From
                                    planning and design to implementation, we
                                    ensure a smooth transition to high-speed,
                                    reliable connectivity.
                                </p>
                                <p className="text-gray-600 text-justify">
                                    Quality is at the core of everything we do.
                                    From the selection of materials to the
                                    execution of projects, we maintain the
                                    highest standards to deliver durable and
                                    efficient fiber optic solutions. Your
                                    satisfaction is our priority.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-8 text-center bg-[url('/img/p2.png')] bg-cover bg-full border-l-2 border-blue-500">
                                <div className="mb-4">
                                    <div className="bg-blue-100 rounded-full p-4 inline-block">
                                        <img
                                            src="/img/service/design1.png"
                                            alt="Gambar"
                                            className="h-8 w-8 object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Design And Maintenance
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    Leverage our expertise in network design to
                                    create a customized fiber optic solution
                                    that aligns with your business requirements.
                                    Our consultation services guide you through
                                    the process, helping you make informed
                                    decisions.
                                </p>
                                <p className="text-gray-600 text-justify">
                                    Stay ahead in the digital era with our use
                                    of cutting-edge technology. We leverage the
                                    latest advancements in fiber optic solutions
                                    to provide you with reliable and
                                    future-proof installations, ensuring your
                                    business stays connected and competitive.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 text-center bg-[url('/img/p3.png')] bg-cover bg-full border-l-2 border-blue-500">
                                <div className="mb-4">
                                    <div className="bg-blue-100 rounded-full p-4 inline-block">
                                        <img
                                            src="/img/service/support1.png"
                                            alt="Gambar"
                                            className="h-8 w-8 object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    Maintenance And Support
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    Ensure the performance longevity of and
                                    optimal your fiber optic infrastructure with
                                    our dedicated maintenance and support
                                    services. We offer regular check-ups,
                                    troubleshooting, and swift resolutions to
                                    keep your network running at its best.
                                </p>
                                <p className="text-gray-600 text-justify">
                                    In times of unexpected outages or issues,
                                    our rapid response team is ready to handle
                                    emergency repairs. Minimize downtime and
                                    disruptions with our prompt and efficient
                                    emergency repair services.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES 1 */}
                <section id="services" className="py-20">
                    <div className="container mx-auto text-center max-w-6xl">
                        <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
                            Our Services
                        </h3>
                        <p className="text-gray-600 font-light mb-12 max-w-2xl mx-auto">
                            Explore the best solutions designed to enhance your
                            business with top-notch quality and seamless
                            integration into your workflow.
                        </p>

                        <div className="border-b-4 border-blue-500 w-16 mx-auto mb-12"></div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Card 1 */}
                            <div
                                className="bg-white shadow-md rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
"
                            >
                                <div className="flex justify-center mb-6">
                                    <img
                                        src="/img/service/fiber.png"
                                        alt="Service 1 Icon"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                    Fiber Optic Installation
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    High-speed internet solutions tailored for
                                    your needs.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Read more &rarr;
                                </a>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="bg-white shadow-md rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
"
                            >
                                <div className="flex justify-center mb-6">
                                    <img
                                        src="/img/service/design.png"
                                        alt="Service 2 Icon"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                    Design And Maintenance
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Reliable system design and continuous
                                    maintenance for seamless operations.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Read more &rarr;
                                </a>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="bg-white shadow-md rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
"
                            >
                                <div className="flex justify-center mb-6">
                                    <img
                                        src="/img/service/support.png"
                                        alt="Service 3 Icon"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                    Maintenance And Support
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Comprehensive support services to keep your
                                    systems running smoothly.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Read more &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* MITRA */}
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

                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                General Information
                            </h3>
                            <form
                                action="#"
                                method="POST"
                                className="space-y-4"
                            >
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
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none focus:border-blue-500 transition duration-300"
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
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none focus:border-blue-500 transition duration-300"
                                            required
                                        />
                                    </div>
                                </div>

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
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none focus:border-blue-500 transition duration-300"
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
                                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none focus:border-blue-500 transition duration-300"
                                        />
                                    </div>
                                </div>

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
                                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none focus:border-blue-500 transition duration-300"
                                        required
                                    ></textarea>
                                </div>

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
