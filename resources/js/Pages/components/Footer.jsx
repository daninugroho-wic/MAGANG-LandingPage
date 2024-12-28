import React from "react";

const Footer = () => {
    return (
        <>
            {/* Footer Utama */}
            <footer className="bg-white py-12 border-t border-gray-300">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
                    {/* Kolom 1: Logo dan Subscribe */}
                    <div className="space-y-4">
                        <img
                            src="/img/maxnet.png"
                            alt="Logo Mitratel"
                            className="mx-auto md:mx-0 w-40 mb-4"
                        />
                        <div className="border-t-2 border-green-500"></div>
                        <p className="text-black font-semibold text-justify">
                            Maxnet Cooperation
                        </p>
                    </div>

                    {/* Kolom 2: Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                            Information
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    More Search
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Helpful Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                            Helpful Links
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Supports
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Our Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                            Our Services
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Brands List
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Order
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Return & Exchange
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Fashion List
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 5: Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                            Contact Us
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="tel:+919999999999"
                                    className="hover:text-green-500"
                                >
                                    +62 899-106-6262
                                </a>
                            </li>
                            <li>
                                <a
                                    href="info@maxnetplus.id"
                                    className="hover:text-green-500"
                                >
                                    info@maxnetplus.id
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-green-500"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-green-500"
                            >
                                <i className="fab fa-google"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-green-500"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-green-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer Bawah */}
            <footer className="text-black py-4 border-t-2 border-green-500">
                <div className="container mx-auto text-center text-sm">
                    <p>
                        © Copyright Maxnet+ By KabelTelekom. All Rights Reserved
                    </p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-green-500">
                            FAQ
                        </a>
                        <a href="#" className="hover:text-green-500">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-green-500">
                            Terms & Condition
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
