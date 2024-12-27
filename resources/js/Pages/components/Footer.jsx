import React from "react";

const Footer = () => {
    return (
        <>
            {/* Footer Utama */}
            <footer className="bg-gray-100 py-12 border-t border-gray-300">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
                    {/* Kolom 1: Logo dan Subscribe */}
                    <div className="space-y-4">
                        <img
                            src="/img/maxnet.png"
                            alt="Logo Mitratel"
                            className="mx-auto md:mx-0 w-40 mb-4"
                        />
                        <p className="text-sm text-gray-600">Your Tagline here</p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-800 font-semibold">Subscribe Now</p>
                            <form className="mt-2">
                                <div className="flex items-center border rounded-md overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="flex-grow px-4 py-2 text-sm border-none focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Kolom 2: Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">Information</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-600">More Search</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
                            <li><a href="#" className="hover:text-blue-600">Events</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Helpful Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">Helpful Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">Services</a></li>
                            <li><a href="#" className="hover:text-blue-600">Supports</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms & Condition</a></li>
                            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Our Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">Our Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">Brands List</a></li>
                            <li><a href="#" className="hover:text-blue-600">Order</a></li>
                            <li><a href="#" className="hover:text-blue-600">Return & Exchange</a></li>
                            <li><a href="#" className="hover:text-blue-600">Fashion List</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                        </ul>
                    </div>

                    {/* Kolom 5: Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="tel:+919999999999" className="hover:text-blue-600">+62 899-106-6262</a></li>
                            <li><a href="info@maxnetplus.id" className="hover:text-blue-600">info@maxnetplus.id</a></li>
                        </ul>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-google"></i></a>
                            <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer Bawah */}
            <footer className="bg-gray-800 text-gray-400 py-4">
                <div className="container mx-auto text-center text-sm">
                    <p>2018 © company.Ltd | All rights reserved</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-white">FAQ</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms & Condition</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
