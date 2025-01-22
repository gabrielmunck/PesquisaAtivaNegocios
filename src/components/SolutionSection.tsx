function SolutionSection() {
  const solutions = [
    {
      title: "Pesquisa de Aceitação",
      description: "Descubra como seu produto ou serviço é recebido pelo mercado através de análises detalhadas e feedback real."
    },
    {
      title: "Pesquisa de Público Alvo",
      description: "Identifique e compreenda seu público ideal com dados precisos para direcionar suas estratégias de maneira eficaz."
    },
    {
      title: "Pesquisa de Marketing",
      description: "Análise completa do mercado para desenvolver estratégias de marketing assertivas e gerar resultados."
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-100">

      <p className="text-4xl text-center font-bold mb-20 tracking-wide">Alguns de nossos serviços</p>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg ">
              <h3 className="text-2xl text-center font-bold h-8 m-8">{solution.title}</h3>
              <p className="text-gray-600 text-xl px-10">{solution.description}</p>
            <div className="text-center py-12">
              <button className="bg-purple-600 text-white text-xl px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Falar com Consultor
              </button>
            </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default SolutionSection
