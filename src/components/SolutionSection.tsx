import { motion } from "framer-motion";

function SolutionSection() {
    const solutions = [
        {
            title: "Pesquisa de Aceitação",
            description:
                "Descubra como seu produto ou serviço é recebido pelo mercado através de análises detalhadas e feedback real.",
        },
        {
            title: "Pesquisa de Público Alvo",
            description:
                "Identifique e compreenda seu público ideal com dados precisos para direcionar suas estratégias de maneira eficaz.",
        },
        {
            title: "Pesquisa de Marketing",
            description:
                "Análise completa do mercado para desenvolver estratégias de marketing assertivas e gerar resultados.",
        },
    ];

    return (
        <section id="servicos" className="py-20 px-4 bg-gray-100">
            <p className="text-4xl text-center font-bold mb-20 tracking-wide">
                Alguns de nossos serviços
            </p>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-white rounded-lg shadow-lg "
                        >
                            <h3 className="text-2xl text-center font-bold h-8 p-8 mb-12">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 text-xl px-10">
                                {solution.description}
                            </p>
                            <div className="text-center px-4 py-12">
                                <button className="bg-purple-600 text-white text-xl px-5 py-2 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                                    Falar com Consultor
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SolutionSection;
