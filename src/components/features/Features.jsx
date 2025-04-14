import { FaMusic, FaList, FaUserAstronaut, FaMobileAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaMusic className="text-4xl mb-4" />,
      title: "Som de Alta Qualidade",
      description: "Experiência sonora imersiva com qualidade premium.",
    },
    {
      icon: <FaList className="text-4xl mb-4" />,
      title: "Playlists Personalizadas",
      description: "Monte playlists do seu jeito com base no seu gosto musical.",
    },
    {
      icon: <FaUserAstronaut className="text-4xl mb-4" />,
      title: "Descoberta de Novos Artistas",
      description: "Explore talentos emergentes e sons que combinam com você.",
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4" />,
      title: "Interface Intuitiva",
      description: "Navegação fácil, rápida e adaptada para todos os dispositivos.",
    },
  ];

  return (
    <section className="features bg-white py-12 px-4 sm:px-6 lg:px-8 text-center" id="features">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-10">
        Funcionalidades do Luvelt
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-full"
          >
            <div className="flex justify-center items-center text-pink-500 group-hover:text-pink-700 transition duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
