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
    <section className="w-full bg-zinc-100 py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl bg-gray-200 py-4 rounded">
          Se interessou? Olhe nossos planos!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        <ContactCard textos={descricaocards[0]}></ContactCard>
        <ContactCard textos={descricaocards[1]}></ContactCard>
        <ContactCard textos={descricaocards[2]}></ContactCard>
        <ContactCard textos={descricaocards[3]}></ContactCard>
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default Contact
  
