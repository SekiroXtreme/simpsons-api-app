import { useParams, useNavigate} from "react-router-dom";
import { useCharacters } from "../hooks/useCharacter";
import type { Character } from "../types";

export default function CharacterShow() {
  const { id } = useParams<{ id: string }>();
  const { characters, loading } = useCharacters(id);
  const navigate = useNavigate(); // <-- aquí

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (!characters.length) return <p className="text-center mt-4">Character not Found</p>;

  const character = characters[0] as Character;

  return (
    <div className="w-full min-h-screen bg-[url('/CloudBackgroundImage.jpg')] bg-cover bg-center flex items-start justify-center p-8 lg:p-8">
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
            <p><strong>Age:</strong> {character?.age || "Unknown"}</p>
            <p><strong>Birthdate:</strong> {character?.birthdate || "Unknown"}</p>
            <p><strong>Occupation:</strong> {character.occupation}</p>
            <p><strong>Status:</strong> {character.status}</p>
             <button
              onClick={() => navigate(-1)} // <-- vuelve a la página anterior
              className="mt-auto inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 w-max"
              >
              ← Return
            </button>
          </div>
        </div>

        {/* Derecha: Contenido con scroll */}
        <div className="w-full lg:w-2/3 h-full flex flex-col p-4 bg-gray-100 rounded-b-lg lg:rounded-r-lg overflow-hidden">
          
          {/* Área con scroll solo para Phrases + Description + Episodio */}
          <div className="flex-1 overflow-y-auto pr-4 space-y-4 ">
            
            {/* Phrases */}
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold mb-2 ">Phrases</h2>
              {character.phrases.length ? (
                character.phrases.map((phrase, index) => (
                  <p
                    key={index}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold w-[30vh]"
                  >
                    {phrase}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 italic">There're no Phrases Available</p>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold mb-2">Description</h2>
              <p className="text-gray-700">{character.description}</p>
            </div>

            {/* Primera aparición */}
            <div>
              <h2 className="text-lg font-bold mb-2">First Appearance</h2>
              <p>
                {character.first_appearance_ep?.description || "Unknown"}
              </p>
            </div>

            {/* Nombre del episodio + airdate + temporada + número */}
            {character.first_appearance_ep && (
              <div>
                <h3 className="text-md font-semibold mb-1">
                  {character.first_appearance_ep?.name || "Nombre no disponible"}
                </h3>
                <p className="text-sm text-gray-600">
                  {`Emission: ${character.first_appearance_ep?.airdate || "unknown"} | 
                    Season ${character.first_appearance_ep?.season || "unknown"} | 
                    Episode ${character.first_appearance_ep?.episode_number || "unknown"}`}
                </p>
              </div>
            )}

            {/* Imagen del episodio */}
            {character.first_appearance_ep?.image_path && (
              <img
                src={`https://cdn.thesimpsonsapi.com/500${character.first_appearance_ep.image_path}`}
                alt={character.first_appearance_ep.name || "Epissode_name"}
                className="w-full h-60 object-cover rounded-lg mt-2"
              />
            )}

            {/* Sinopsis */}
            {character.first_appearance_ep?.synopsis && (
              <div>
                <h4 className="text-md font-bold mt-2 mb-1">Synopsis</h4>
                <p className="text-gray-700">{character.first_appearance_ep.synopsis}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
