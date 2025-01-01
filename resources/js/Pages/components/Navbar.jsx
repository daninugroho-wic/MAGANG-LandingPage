import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSection = "";

            const sections = ["home", "sejarah", "visi", "hubungi", "esg"];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition <= offsetBottom
                    ) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };
        const checkInitialActiveSection = () => {
            const currentPath = window.location.pathname;
            const sectionMap = {
                "/": "home",
                "/sejarah": "sejarah",
                "/visi": "visi",
                "/contact": "hubungi",
                "/layanan": "esg",
            };
            const initialSection = sectionMap[currentPath] || "";
            setActiveSection(initialSection);
        };

        // Cek halaman aktif saat mount
        checkInitialActiveSection();

        // Tambahkan event listener untuk scroll
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{ backgroundColor: "white" }}
            className={`text-black py-3 shadow-md fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
                isScrolled ? "bg-opacity-95" : ""
            }`}
        >
            <div className="container mx-auto flex flex-col items-center px-4">
                {/* Logo */}
                <div className="flex justify-center w-full mb-4">
                    {!isScrolled && (
                        <img
                            src="img/semesta1.png"
                            alt="Logo"
                            className="hidden md:block logo h-10 sm:h-12 md:h-20 w-auto transition-all duration-300"
                        />
                    )}
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <a
                        href="/"
                        className={`relative font-semibold transition duration-300 transform hover:scale-105 hover:text-blue-500 ${
                            activeSection === "home" ? "text-blue-500" : ""
                        }`}
                    >
                        Home
                        {activeSection === "home" && (
                            <span className="absolute top-0 left-0 w-full h-[10%] bg-blue-500"></span>
                        )}
                    </a>
                    <div className="relative group">
                        <button
                            className={`relative font-semibold transition duration-300 transform hover:scale-105 hover:text-blue-500 ${
                                ["sejarah", "visi"].includes(activeSection)
                                    ? "text-blue-500"
                                    : ""
                            }`}
                        >
                            About Us
                        </button>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48 rounded-lg z-10">
                            <a
                                href="/sejarah"
                                className={`block px-4 py-2 transition duration-300 ${
                                    activeSection === "sejarah"
                                        ? "text-blue-500 font-bold"
                                        : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                Sejarah
                            </a>
                            <a
                                href="/visi"
                                className={`block px-4 py-2 transition duration-300 ${
                                    activeSection === "visi"
                                        ? "text-blue-500 font-bold"
                                        : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                Visi & Misi
                            </a>
                        </div>
                    </div>
                    <a
                        href="/contact"
                        className={`relative font-semibold transition duration-300 transform hover:scale-105 hover:text-blue-500 ${
                            activeSection === "hubungi" ? "text-blue-500" : ""
                        }`}
                    >
                        Contact Us
                        {activeSection === "hubungi" && (
                            <span className="absolute top-0 left-0 w-full h-[10%] bg-blue-500"></span>
                        )}
                    </a>
                    <a
                        href="/layanan"
                        className={`relative font-semibold transition duration-300 transform hover:scale-105 hover:text-blue-500 ${
                            activeSection === "esg" ? "text-blue-500" : ""
                        }`}
                    >
                        Layanan
                        {activeSection === "esg" && (
                            <span className="absolute top-0 left-0 w-full h-[10%] bg-blue-500"></span>
                        )}
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center justify-between w-full px-4">
                    <img
                        src="img/semesta1.png"
                        alt="Mitratel"
                        className="h-10 w-auto"
                    />

                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-black focus:outline-none p-2 border rounded-md"
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
                            href="/"
                            className="hover:text-blue-500 font-semibold transition duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="hover:text-blue-500 font-semibold transition duration-300"
                        >
                            About Us
                        </a>
                        <a
                            href="/contact"
                            className="hover:text-blue-500 font-semibold transition duration-300"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/layanan"
                            className="hover:text-blue-500 font-semibold transition duration-300"
                        >
                            Layanan
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
