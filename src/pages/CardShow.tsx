import { useParams } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacter";

export default function CardShow() {
  const { id } = useParams<{ id: string }>();
  const { characters } = useCharacters();

  const character = characters.find((char) => String(char.id) === id);

  if (!character) {
    return <p className="text-center mt-10">Cargando personaje...</p>;
  }

  return (
    <div className="bg-[url('/CloudBackgroundImage.jpg')] bg-center bg-cover">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
        alt={character.name}
        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-400 shadow-md"
      />
      <h1 className="text-2xl font-bold text-center mt-4">{character.name}</h1>
      <p className="mt-2 text-gray-700"><strong>Edad:</strong> {character.age ?? "Desconocido"}</p>
      <p className="text-gray-700"><strong>Cumpleaños:</strong> {character.birthdate ?? "Desconocido"}</p>
      <p className="text-gray-700"><strong>Ocupación:</strong> {character.occupation}</p>
      <p className="text-gray-700"><strong>Estado:</strong> {character.status}</p>

      <div className="mt-4">
        <p className="font-semibold">Frases:</p>
        <ul className="list-disc ml-6">
          {character.phrases.map((phrase, idx) => (
            <li key={idx}>{phrase}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    
  );
}