import { useState } from "react";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      tel: "",
      message: "",
  });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.tel || !formData.message) {
          alert('Por favor preencha todos os campos');
          return;
      }
    };

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden bg-blue-600 md:flex flex-col rounded-lg">
                    <div className="flex justify-center items-center h-[100px]">
                    <span
                                className="text-2xl uppercase font-bold text-white tracking-[0.5em]"
                            > Consulte Grátis
                            </span>
                    </div>
                    <img
                        src="/pcForms.jpg"
                        alt="Contact Us"
                        className="rounded-ee-lg shadow-xl h-[500px] object-cover object-[center_70%]"
                    />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Entre em Contato
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Telefone
                            </label>
                            <input
                                type="tel"
                                pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
                                value={formData.tel}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        tel: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="(11) 99999-9999"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="email@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">
                                Assunto
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                                placeholder="Diga bravemente qual serviço gostaria para agendar-mos uma consulta..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
