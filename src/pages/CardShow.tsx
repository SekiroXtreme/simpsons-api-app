import { useParams, Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacter";
import type { Character } from "../types";

export default function CardShow() {
  const { id } = useParams<{ id: string }>();
  const { characters, loading } = useCharacters(id);

  if (loading) return <p className="text-center mt-4">Cargando...</p>;
  if (!characters.length) return <p className="text-center mt-4">Personaje no encontrado</p>;

  const character = characters[0] as Character;
  
  return (
    <div className="w-full min-h-screen bg-[url('/CloudBackgroundImage.jpg')] bg-cover bg-center flex items-start justify-center p-4 lg:p-8">
      {/* Container principal */}
      <div className="p-4 bg-white w-full max-w-7xl rounded-xl shadow-lg flex flex-col lg:flex-row gap-6 overflow-hidden h-auto lg:h-[85vh]">
        {/* Izquierda: Imagen + info básica + botón */}
        <div className="flex flex-col w-full lg:w-1/3 h-full">
          <img
            src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
            alt={character.name}
            className="w-full h-80 object-cover rounded-t-lg"
          />
          <div className="p-4 flex flex-col gap-3 flex-1">
            <h1 className="text-2xl font-bold">{character.name}</h1>
            <p><strong>Edad:</strong> {character?.age || "Desconocido"}</p>
            <p><strong>Cumpleaños:</strong> {character?.birthdate || "Desconocido"}</p>
            <p><strong>Ocupación:</strong> {character.occupation}</p>
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Primera aparición (episodio):</strong> {character.first_appearance_ep.name || 'Desconocido'}</p>

            <Link
              to="/"
              className="mt-auto inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 w-max"
            >
              ← Volver
            </Link>
          </div>
        </div>

        {/* Derecha: Frases indentadas + divider + descripción */}
        <div className="w-full lg:w-2/3 h-full flex flex-col p-4 bg-gray-100 rounded-b-lg lg:rounded-r-lg overflow-hidden">
          {/* Frases con indentación hacia la derecha */}
          <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-4">
            {character.phrases.length ? (
              character.phrases.map((phrase, index) => (
                <p key={index} className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold w-[30vh]">
                  {phrase}
                </p>
              ))
            ) : (
              <p className="text-gray-500 italic">No hay frases disponibles</p>
            )}
          </div>

          {/* Divider */}
          <hr className="my-4 border-gray-400" />

          {/* Descripción */}
          <div className="text-gray-700 overflow-y-auto max-h-40">
            <p>{character.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}