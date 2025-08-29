import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/layout/Card";
import CardGrid from "../components/layout/CardGrid";
import { useCharacters } from "../hooks/useCharacter";
import Modal from "../components/layout/Modal";
import type { Character } from "../types";

export default function CharacterIndex() {
  const { characters, loading, page, hasMore, loadNext, loadPrev } = useCharacters();
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-4">Cargando...</p>;

  return (
    <>
      <CardGrid
        page={page}
        hasMore={hasMore}
        loading={loading}
        loadNext={loadNext}
        loadPrev={loadPrev}
      >
        {characters.map((char) => (
          <CardItem key={char.id}>
            <div
              onClick={() => setSelectedChar(char as Character)}
              className="cursor-pointer p-4"
            >
              <div className="flex justify-center p-4 bg-gray-50">
                <img
                  src={`https://cdn.thesimpsonsapi.com/500${char.portrait_path}`}
                  alt={char.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-md"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">{char.name}</h2>
              <p className="text-sm text-gray-600"><strong>Age:</strong> {char.age ?? "Unknown"}</p>
              <p className="text-sm text-gray-600"><strong>Birthdate:</strong> {char.birthdate ?? "Unknown"}</p>
              <p className="text-sm text-gray-600"><strong>Occupation:</strong> {char.occupation ?? "Unknown"}</p>
              <p className="text-sm text-gray-600"><strong>Status:</strong> {char.status ?? "Unknown"}</p>
            </div>
          </CardItem>
        ))}
      </CardGrid>

      <Modal open={!!selectedChar} onClose={() => setSelectedChar(null)}>
        {selectedChar && (
          <div className="p-4 flex flex-col gap-3 text-center justify-center items-center bg-white w-[70vw] lg:w-[40vw] rounded-md">
            <img
              src={`https://cdn.thesimpsonsapi.com/500${selectedChar.portrait_path}`}
              alt={selectedChar.name}
              className="w-[15vh] h-full object-cover rounded-full border-4 border-yellow-400 shadow-md"
            />
            <h2 className="text-xl font-bold mb-4">{selectedChar.name}</h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700">{selectedChar.description || "No description available"}</p>
              <p className="font-bold">Phrases</p>
              {selectedChar.phrases?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 justify-start">
                  {selectedChar.phrases.slice(0, 3).map((phrase, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-medium text-sm"
                    >
                      {phrase}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic mt-2">No phrases available</p>
              )}
            </div>
            <button
              onClick={() => {
                navigate(`/cardshow/${selectedChar.id}`);
                setSelectedChar(null);
              }}
              className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500"
            >
              See more →
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}
