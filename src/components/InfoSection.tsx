function InfoSection() {
    return (
        <main className="relative">
            <div className="absolute w-full h-[800px] bg-gradient-to-r from-blue-600 to-blue-800 clip-path-triangle -z-10"></div>
            <div className="flex w-full justify-center sha bg-gradient-to-r from-blue-600 to-blue-800 p-8 ">
                <h2 className="text-white font-bold tracking-wider text-3xl md:text-5xl text-center leading-tight relative">
                    Entenda mais sobre a pesquisa ativa
                    <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-white rounded-full"></span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto z-10">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                        O Pesquisa Ativa é para você que...
                    </h2>
                    <div className="text-gray-600 text-xl leading-relaxed">
                        <p className="group-hover:text-gray-700 transition-colors">
                            A pesquisa ativa é uma ferramenta essencial para
                            qualquer empresa que busca crescer e se manter
                            competitiva. Ao coletar dados diretos e específicos
                            sobre seus clientes e mercado, as empresas podem
                            tomar decisões mais estratégicas, identificar novas
                            oportunidades de negócios e melhorar a satisfação
                            dos clientes.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                        Como faturar mais com o Pesquisa Ativa?
                    </h2>
                    <div className="text-gray-600 text-xl leading-relaxed">
                        <p className="group-hover:text-gray-700 transition-colors">
                            A pesquisa ativa é um investimento que pode gerar um
                            grande retorno para o seu negócio. Ao utilizar essa
                            ferramenta de forma estratégica, você pode aumentar
                            o seu faturamento, fortalecer sua marca e garantir o
                            sucesso a longo prazo
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                    <h2 className="text-2xl font-bold text-gray-800 mb-12 group-hover:text-blue-600 transition-colors">
                        Como economizar com o Pesquisa Ativa?
                    </h2>
                    <div className="text-gray-600 text-xl leading-relaxed space-y-10">
                        <div className="flex gap-3">
                            <span className="font-bold text-blue-600">1.</span>
                            <p className="group-hover:text-gray-700 transition-colors">
                                Foco: Ao definir objetivos claros, você delimita
                                o escopo da pesquisa, evitando coletar dados
                                desnecessários.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-blue-600">2.</span>
                            <p className="group-hover:text-gray-700 transition-colors">
                                Escolha a Metodologia Adequada: Custo-benefício:
                                Avalie o custo e o benefício de cada método.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-blue-600">3.</span>
                            <p className="group-hover:text-gray-700 transition-colors">
                                Aproveite Dados Internos: Base de clientes e
                                análise de dados existentes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                        5 razões para você conhecer melhor o Pesquisa Ativa!
                    </h2>
                    <div className="text-gray-600 text-xl leading-relaxed space-y-4">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="flex gap-3">
                                <span className="font-bold text-blue-600 min-w-[24px]">
                                    {num}.
                                </span>
                                <div className="group-hover:text-gray-700 transition-colors">
                                    <h3 className="font-semibold">
                                        {num === 1 &&
                                            "Tomada de Decisões Baseada em Dados Reais"}
                                        {num === 2 &&
                                            "Desenvolvimento de Produtos Personalizados"}
                                        {num === 3 &&
                                            "Identificação de Novas Oportunidades"}
                                        {num === 4 &&
                                            "Melhoria da Eficiência em Marketing"}
                                        {num === 5 &&
                                            "Fortalecimento da Sua Marca"}
                                    </h3>
                                    <p className="mt-1">
                                        {num === 1 &&
                                            "Reduza riscos com decisões baseadas em dados reais sobre seus clientes."}
                                        {num === 2 &&
                                            "Entenda seu público e desenvolva soluções que fazem a diferença."}
                                        {num === 3 &&
                                            "Descubra novos nichos e oportunidades de crescimento."}
                                        {num === 4 &&
                                            "Avalie e aprimore suas campanhas de marketing."}
                                        {num === 5 &&
                                            "Fortaleça relacionamentos mostrando que você se importa."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default InfoSection;
