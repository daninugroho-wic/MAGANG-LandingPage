import React from "react";

const Footer = () => {
    return (
        <>
            {/* Footer Utama */}
            <footer className="bg-blue-50 py-12 border-t border-gray-300">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center md:text-left">
                    {/* Kolom 1: Logo dan Subscribe */}
                    <div className="space-y-4 col-span-1 lg:col-span-1 text-justify">
                        <img
                            src="/img/semesta.png"
                            alt="Logo Mitratel"
                            className="mx-auto w-32 sm:w-40 mb-4"
                        />
                    </div>

                    {/* Kolom lainnya */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                                Information
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        More Search
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                                Helpful Links
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Supports
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                                Our Services
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Brands List
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Order
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Return & Exchange
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Fashion List
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                                Contact Us
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <li>
                                    <a
                                        href="tel:+919999999999"
                                        className="hover:text-blue-500"
                                    >
                                        (0271)-340-6262
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+919999999999"
                                        className="hover:text-blue-500"
                                    >
                                        0899-106-6262
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@maxnetplus.id"
                                        className="hover:text-blue-500"
                                    >
                                        info@maxnetplus.id
                                    </a>
                                </li>
                            </ul>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-500"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-500"
                                >
                                    <i className="fab fa-google"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-500"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-500"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Bawah */}
            <footer className="bg-blue-50 text-black py-6">
                <div className="container mx-auto border-t border-blue-500 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm">
                            <img
                                src="img/iconsmsta.png" // Ganti dengan path gambar lokal Anda
                                alt="Freepik Logo"
                                className="h-6 mr-2" // Menentukan tinggi gambar dan memberikan margin kanan
                            />
                            <p className="mb-0">
                                © Copyright Maxnet+ By KabelTelekom. All Rights
                                Reserved
                            </p>
                        </div>
                        <button
                            className="bg-transparent border border-blue-500 text-blue-500 px-3 py-1 rounded text-xs"
                            type="button"
                        >
                            English ▼
                        </button>
                    </div>
                    <div className="container mx-auto flex justify-between items-center p-4 mt-10 text-xs bg-blue-100">
                        {/* Maxnet Project */}
                        <div>
                            <p className="mb-0 text-gray-400">Maxnet project</p>
                        </div>
                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500"
                            >
                                FAQ
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500"
                            >
                                Terms & Condition
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
