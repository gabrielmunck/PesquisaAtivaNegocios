import stockLogo from "/stock.svg"

function Footer() {
    return (
        <footer className="bg-blue-800 text-white pt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            src={stockLogo}
                            alt="Stock Logo"
                            className="h-8 w-8 mr-1 brightness-0 invert"
                        />
                        <span className="ml-2 font-bold text-lg">
                            Pesquisa Ativa Negócios
                        </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:space-x-8 items-center">
                        <a href="#home" className="hover:text-gray-200 mb-2 md:mb-0">Sobre</a>
                        <a href="#sobre" className="hover:text-gray-200 mb-2 md:mb-0">Benefícios</a>
                        <a href="#servicos" className="hover:text-gray-200 mb-2 md:mb-0">Soluções</a>
                        <a href="#contato" className="hover:text-gray-200">Contato</a>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-300">
                    <p>© 2025 Pesquisa Ativa Negócios. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
