function ContactCard({ textos }) {
  return (
    <section id="plans">
    <div className="flex flex-col bg-black rounded-2xl shadow-lg p-6 h-full">
      <h2 className="text-xl font-semibold mb-3 text-white text-center">{textos[0]}</h2>

      <div className="flex flex-col flex-grow">
        <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
          <li>{textos[1]}</li>
          <li>{textos[2]}</li>
          <li>{textos[3]}</li>
        </ul>

        <a
          href="#"
          className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center"
        >
          {textos[4]}
        </a>
      </div>
    </div>
    </section>
  );
}

export default ContactCard;
