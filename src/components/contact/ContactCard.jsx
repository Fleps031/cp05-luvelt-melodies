function ContactCard({textos}) {
    return (
    <div className="flex flex-col min-w-[150px] w-full sm:w-[220px] md:w-[280px] bg-black rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-white text-center">{textos[0]}</h2>
        <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
          <li>{textos[1]}</li>
          <li>{textos[2]}</li>
          <li>{textos[3]}</li>
        </ul>
        <a href="#" className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition text-center"> {textos[4]}</a>
      </div>
    );
}

export default ContactCard