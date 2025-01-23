import { useState, useEffect } from "react";
import stockLogo from "/stock.svg";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full transition-all duration-300 z-50 ${
                isScrolled ? "bg-blue-800 shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <img
                            src={stockLogo}
                            alt="Stock Logo"
                            className="h-10 w-10 mr-1 brightness-0 invert"
                        />
                        <span className="ml-2 text-white font-bold text-xl">
                            Pesquisa Ativa Negócios
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-gray-200">Sobre</a>
                        <a href="#sobre" className="text-white hover:text-gray-200">Benefícios</a>
                        <a href="#servicos" className="text-white hover:text-gray-200">Soluções</a>
                        <a href="#contato" className="text-white hover:text-gray-200">Contato</a>
                    </div>

                    <button 
                        className="md:hidden text-white"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-blue-800 py-4">
                        <div className="flex flex-col space-y-4 px-4">
                            <a href="#home" onClick={handleLinkClick} className="text-white hover:text-gray-600">Sobre</a>
                            <a href="#sobre" onClick={handleLinkClick} className="text-white hover:text-gray-600">Benefícios</a>
                            <a href="#servicos" onClick={handleLinkClick} className="text-white hover:text-gray-600">Soluções</a>
                            <a href="#contato" onClick={handleLinkClick} className="text-white hover:text-gray-600">Contato</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
