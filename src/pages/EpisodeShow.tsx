import { useParams, useNavigate } from "react-router-dom";
import { useEpisodes } from "../hooks/useEpisode";
import type { Episodes } from "../types";

export default function EpisodesShow() {
  const { id } = useParams<{ id: string }>();
  const { episodes, loading } = useEpisodes(id);
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (!episodes.length) return <p className="text-center mt-4">Episode not Found</p>;

  const episode = episodes[0] as Episodes;

  return (
    <div className="w-full min-h-screen bg-[url('/CloudBackgroundImage.jpg')] bg-cover bg-center flex items-start justify-center p-8">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 flex flex-col gap-6">
        
        {/* Botón Return */}
        <button
          onClick={() => navigate(-1)}
          className="self-start bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:click transition"
        >
          ← Return
        </button>

        {/* Imagen del episodio */}
        {episode.image_path ? (
          <img
            src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
            alt={episode.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">No Image</span>
          </div>
        )}

        {/* Info básica */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{episode.name}</h1>
          <p className="text-gray-600"><strong>Airdate:</strong> {episode.airdate || "Unknown"}</p>
          <p className="text-gray-600"><strong>Season:</strong> {episode.season} | <strong>Episode:</strong> {episode.episode_number}</p>
        </div>

        {/* Descripción */}
        {episode.description && (
          <div>
            <h2 className="text-lg font-semibold mb-1">Description</h2>
            <p className="text-gray-700">{episode.description}</p>
          </div>
        )}

        {/* Sinopsis */}
        {episode.synopsis && (
          <div>
            <h2 className="text-lg font-semibold mb-1">Synopsis</h2>
            <p className="text-gray-700">{episode.synopsis}</p>
          </div>
        )}
      </div>
    </div>
  );
}