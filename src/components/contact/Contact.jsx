import './Contact.css'
import ContactCard from './ContactCard';

function Contact() {
  
  const descricaocards = [
    ['1 Conta Premium', 'Cancele quando quiser', 'Assinatura mensal ou pagamento único'],
    ['1 Conta Premium verificada', 'Desconto para estudantes (que atendam aos critérios de qualificação)', 'Cancele quando quiser'],
    ['2 Contas verificadas', 'Cancele quando quiser', 'Faça uma assinatura ou pague uma vez só'],
    ['Até 6 contas Premium ou Kids', 'Controle conteúdo marcado como explícito', 'Acesso ao Spotify Kids', 'Cancele quando quiser', 'Faça uma assinatura ou pague uma vez só']
  ]
  
  
  return (
    <section className="w-full bg-white py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl bg-gray-200 py-4 rounded">
          Se interessou? Olhe nossos planos!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        <div className="flex flex-col min-w-[150px] w-full sm:w-[220px] md:min-w-[400px] md:max-w[800px] bg-black rounded-2xl shadow-lg p-6 flex-grow-1">
          <h2 className="text-xl font-semibold mb-3 text-white text-center">Individual</h2>
          <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
            <li>1 conta Premium</li>
            <li>Cancele quando quiser</li>
            <li>Assinatura mensal ou pagamento único</li>
          </ul>
          <a href="#" className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center"> Assine o Premium Individual</a>
        </div>
        <div className="flex flex-col min-w-[150px] w-full sm:w-[220px] md:min-w-[400px] md:max-w[800px] bg-black rounded-2xl shadow-lg p-6 flex-grow-1">
          <h2 className="text-xl font-semibold mb-3 text-white text-center">Universitário</h2>
          <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
            <li>1 conta Premium verificada</li>
            <li>Desconto para estudantes (que atendam aos critérios de qualificação)</li>
            <li>Cancele quando quiser</li>
          </ul>
          <a href="#" className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center">Assinar o Premium Duo</a>
        </div>
        <div className="flex flex-col min-w-[150px] w-full sm:w-[220px] md:min-w-[400px] md:max-w[800px] bg-black rounded-2xl shadow-lg p-6 flex-grow-1">
          <h2 className="text-xl font-semibold mb-3 text-white text-center">Duo</h2>
            <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
              <li>2 Contas Verificadas</li>
              <li>Cancele quando quiser</li>
              <li>Faça uma assinatura ou pague uma vez só</li>
            </ul>
            <a href="#" className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center">Assinar o Premium Universitário</a>
        </div>
        <div className="flex flex-col min-w-[150px] w-full sm:w-[220px] md:min-w-[350px] md:max-w[600px] bg-black rounded-2xl shadow-lg p-6 flex-grow-1">
          <h2 className="text-xl font-semibold mb-3 text-white text-center">Família</h2>
            <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
              <li>Até 6 contas Premium ou Kids</li>
              <li>Controle conteúdo marcado como explícito</li>
              <li>Acesso ao Spotify Kids</li>
              <li>Cancele quando quiser</li>
              <li>Faça uma assinatura ou pague uma vez só</li>
            </ul>
            <a href="#" className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center">Assinar o Premium Família</a>
        </div>
        {/* <ContactCard></ContactCard> */}
      </div>
    </section>
  );
}

export default Contact
  
