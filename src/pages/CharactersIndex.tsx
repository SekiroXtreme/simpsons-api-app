import CardItem from "../components/layout/Card";
import CardGrid from "../components/layout/CardGrid";
import { useCharacters } from "../hooks/useCharacter";


export default function CharacterIndex() {
  const { characters, loading, page, hasMore, loadNext, loadPrev } = useCharacters();

  if (loading) return <p className="text-center mt-4">Cargando...</p>;

  return (
    <CardGrid page={page} hasMore={hasMore} loading={loading} loadNext={loadNext} loadPrev={loadPrev}>
      {characters.map((char) => (
        <CardItem key={char.id} to={`/cardshow/${char.id}`}>
            <div className="p-4 ">
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
  );
}