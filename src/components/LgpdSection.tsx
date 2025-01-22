


function LgpdSection() {
  return (
      <main className="bg-blue-800 text-white py-16 px-4 md:px-8  shadow-xl w-full my-8">
          <div className="space-y-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-blue-200">
                      Compromisso com a Privacidade e Segurança
                  </h2>
              </div>
              <p className="text-blue-100 leading-relaxed">
                  Aqui na Pesquisa Ativa Negócios, sua privacidade e segurança
                  são nossa prioridade. Estamos em total conformidade com a
                  Lei Geral de Proteção de Dados (LGPD), garantindo que seus
                  dados pessoais sejam tratados com transparência, segurança e
                  para finalidades legítimas.
              </p>
              <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-200">
                      Nossas certificações de segurança:
                  </h3>
                  <ul className="text-blue-100 space-y-4 list-disc pl-6">
                      <li>
                          <strong>Certificação SSL (Secure Socket Layer):</strong> Conexão 
                          criptografada para proteger seus dados durante a navegação.
                      </li>
                      <li>
                          <strong>Certificação ISO 27001:</strong> Garantia de um sistema 
                          de gestão de segurança da informação robusto.
                      </li>
                      <li>
                          <strong>Auditorias regulares:</strong> Realizamos revisões 
                          frequentes para assegurar a integridade de nossos sistemas.
                      </li>
                  </ul>
              </div>
          </div>
      </main>
  );
}

export default LgpdSection;
