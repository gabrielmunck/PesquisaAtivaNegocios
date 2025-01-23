function HeroSection() {
    const handleConsultClick = () => {
        window.open("https://www.linkedin.com/in/gabrielmunck/", "_blank");
    };

    return (
        <main id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 min-h-[600px]">
            <div className="max-w-7xl mx-auto">
                <article className="flex flex-col md:flex-row py-28 gap-2">
                    <div className="flex flex-col w-full md:w-[80%] justify-center items-center space-y-8 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-4xl md:text-7xl font-bold text-white leading-snug">
                            Descubra por que o Pesquisa Ativa está
                            revolucionando o mundo dos negócios!
                        </h3>

                        <section className="space-y-8">
                            <p className="text-2xl text-pretty text-gray-100">
                                Transforme dados em resultados com nossa
                                metodologia exclusiva de pesquisa. Oferecemos
                                rapidez e assertividade para impulsionar suas
                                decisões estratégicas.
                            </p>

                        </section>
                            <div className="flex justify-center md:justify-start items-center w-full h-28">
                                <button
                                    onClick={handleConsultClick}
                                    className="bg-white text-blue-600 px-8 py-8 rounded-full font-semibold 
                                            text-xl hover:bg-blue-800 hover:text-white transition-colors duration-300 
                                            shadow-lg hover:shadow-xl"
                                >
                                    Consulte de graça aqui!
                                </button>
                            </div>
                    </div>
                    <div className="hidden lg:flex md:flex-1 w-full md:w-[10%] ">
                        <img
                            src="/stock.svg"
                            alt="Stock graph visualization"
                            className="w-full h-full filter invert"
                        />
                    </div>
                </article>
            </div>
        </main>
    );
}

export default HeroSection;
