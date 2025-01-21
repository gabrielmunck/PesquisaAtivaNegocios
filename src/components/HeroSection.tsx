function HeroSection() {
  return (
      <main className="bg-gradient-to-r from-blue-600 to-blue-800 min-h-[600px]">
          <div className="max-w-6xl mx-auto">
              <article className="flex flex-col md:flex-row py-20 gap-12">
                  <div className="flex-1 w-full md:w-1/2 space-y-8 px-4 sm:px-6 lg:px-8">
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                          Descubra por que o Pesquisa Ativa está
                          revolucionando o mundo dos negócios!
                      </h3>

                      <section className="space-y-6">
                          <p className="text-xl text-gray-100">
                              Transforme dados em resultados com nossa
                              metodologia exclusiva de pesquisa. Oferecemos
                              rapidez e assertividade para impulsionar suas
                              decisões estratégicas.
                          </p>

                          <button
                              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold 
                                        text-lg hover:bg-blue-50 transition-colors duration-300 
                                        shadow-lg hover:shadow-xl"
                          >
                              Consulte de graça aqui!
                          </button>
                      </section>
                  </div>
                  <div className="hidden md:flex md:flex-1 w-full md:w-1/2 bg-blue-500/20 rounded-full backdrop-blur-sm p-8">
                      <div className="h-full w-full rounded-full bg-gradient-to-br from-white/10 to-transparent p-8">
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                      </div>
                  </div>
              </article>
          </div>
      </main>
  );
}

export default HeroSection;

