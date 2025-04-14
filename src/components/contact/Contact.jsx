import './Contact.css'
import ContactCard from './ContactCard';

function Contact() {
  
  const descricaocards = [
    ['Individual', '1 Conta Premium', 'Cancele quando quiser', 'Assinatura mensal ou pagamento único', 'Assinar o Premium Individual'],
    ['Universitário', '1 Conta Premium verificada', 'Desconto para estudantes (que atendam aos critérios de qualificação)', 'Cancele quando quiser', 'Assinar o Premium Universitário'],
    ['Duo', '2 Contas verificadas', 'Cancele quando quiser', 'Faça uma assinatura ou pague uma vez só', 'Assinar o Premium Duo'],
    ['Família', 'Até 6 contas Premium ou Kids', 'Controle conteúdo marcado como explícito', 'Faça uma assinatura ou pague uma vez só', 'Assinar o Premium Família'],
  ]
  
  
  return (
    <section id='contact' className=" w-full bg-white py-12 ">
      <div className="text-center mb-10">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl bg-white py-4 rounded">
          Se interessou? Olhe nossos planos!
        </h1>
      </div>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <ContactCard textos={descricaocards[0]}></ContactCard>
        <ContactCard textos={descricaocards[1]}></ContactCard>
        <ContactCard textos={descricaocards[2]}></ContactCard>
        <ContactCard textos={descricaocards[3]}></ContactCard>
      </div>
      <section className="w-full bg-white py-12 px-4">
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-white py-4 rounded">
      Entre em contato com a gente
    </h2>
    <p className="mt-2 text-gray-600">
      Ficou com dúvidas ou quer falar com a nossa equipe? Mande uma mensagem!
    </p>
  </div>

  <form className="max-w-2xl mx-auto bg-zinc-100 p-6 rounded-2xl shadow-md space-y-6">
    <div>
      <label htmlFor="nome" className="block text-gray-700 font-semibold mb-1">
        Nome
      </label>
      <input
      id="nome"
      type="text"
      placeholder="Seu nome"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 bg-white"
      />

    </div>

    <div>
      <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
        Email
      </label>
      <input
      id="email"
      type="email"
      placeholder="Seu Email"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 bg-white"
      />

    </div>

    <div>
      <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-1">
        Mensagem
      </label>
      <textarea
      id="mensagem"
      rows="5"
      placeholder="Escreva sua mensagem..."
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 bg-white"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-2 px-6 rounded-xl"
      >
        Enviar mensagem
      </button>
    </div>
  </form>
</section>

    </section>
  );
}

export default Contact
  
