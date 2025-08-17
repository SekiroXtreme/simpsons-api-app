import CardItem from "../components/layout/Card";
import CardGrid from "../components/layout/CardGrid";
import PrincipalLogo from "../components/layout/PrincipalLogo";
import { useEpisodes } from "../hooks/useEpisode";

export default function EpisodesIndex() {
  const { episodes, loading, page, hasMore, loadNext, loadPrev } = useEpisodes();

  if (loading) return <p className="text-center">Cargando...</p>;

  return (
    <div className="m-0 mx-auto min-h-screen">
      {/* Logo y bienvenida */}
      <div className="text-center">
        <PrincipalLogo
          title="Bienvenido a Springfield"
          description="Solo lo mejor de los Simpsons"
          button={false}
          buttonText=""
        />
      </div>

      {/* Grid de episodios */}
      <CardGrid
        page={page}
        hasMore={hasMore}
        loading={loading}
        loadNext={loadNext}
        loadPrev={loadPrev}
      >
        {episodes.map((episode) => (
          <CardItem key={episode.id} to={`/episodes/${episode.id}`}>
            <div className="flex flex-col p-4 gap-3">
              {/* Imagen del episodio */}
              <img
                src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
                alt={episode.name}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />

              {/* Nombre y detalles */}
              <h2 className="text-lg font-bold text-gray-800">{episode.name}</h2>
              <p className="text-sm text-gray-600">
                <strong>Temporada:</strong> {episode.season} |{" "}
                <strong>Episodio:</strong> {episode.episode_number}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Emisión:</strong> {episode.airdate ?? "Desconocida"}
              </p>

              {/* Sinopsis breve */}
              <p className="text-gray-700 line-clamp-3">{episode.synopsis || "Sin sinopsis disponible"}</p>
            </div>
          </CardItem>
        ))}
      </CardGrid>
    </div>
  );
}