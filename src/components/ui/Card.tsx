
import  GetSimpsonsCharacterData  from "../../utils/fetchCharacters";


export default function Card() {
  const characters = GetSimpsonsCharacterData();
  return (
      <div className="grid grid-cols-1 bg-[url('/CloudBackgroundImage.jpg')] bg-center bg-cover sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {characters.map((char) => (
    <div
      key={char.id}
      className="bg-white mt-20 rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex justify-center p-4 bg-gray-50">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${char.portrait_path}`}
          alt={char.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-md"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">{char.name}</h2>
        
        <p className="text-sm text-gray-600">
          <strong>Edad:</strong> {char.age !== null ? char.age : "Desconocido"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Cumpleaños:</strong> {char.birthdate !== null ? char.birthdate : "Desconocido"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Ocupación:</strong> {char.occupation}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Estado:</strong> {char.status}
        </p>

        {/* Frases */}
        <div className="mt-3">
          <p className="font-semibold text-gray-700 mb-1">Frases:</p>
          <div className="flex flex-wrap gap-2">
            {char.phrases.slice(0, 3).map((phrase, index) => (
              <span
                key={index}
                className="bg-yellow-300 text-cyan-700 text-xs font-medium px-2 py-1 rounded-full truncate max-w-[150px]"
                title={phrase} // tooltip con la frase completa
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-3">ID: {char.id}</p>
      </div>
    </div>
  ))}
</div>
  );
}