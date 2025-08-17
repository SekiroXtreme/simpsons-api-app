import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import type { Episodes, EpisodesResponse } from "../types";

export function useEpisodes(id?: string) {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // Leer y escribir el parámetro "page" en la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    let isMounted = true;

    const fetchEpisodes = async () => {
      setLoading(true);
      try {
        if (id) {
          // Obtener un solo episodio
          const response = await axios.get<Episodes>(
            `https://thesimpsonsapi.com/api/episodes/${id}`
          );
          if (isMounted) setEpisodes([response.data]);
        } else {
          // Obtener episodios por página
          const response = await axios.get<EpisodesResponse>(
            `https://thesimpsonsapi.com/api/episodes?page=${page}`
          );
          if (isMounted) {
            setEpisodes(response.data.results);
            setHasMore(response.data.results.length > 0);
          }
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
        if (isMounted) setEpisodes([]);
        setHasMore(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchEpisodes();

    if (!id) setSearchParams({ page: page.toString() });

    return () => {
      isMounted = false;
    };
  }, [id, page, setSearchParams]);

  const loadNext = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const loadPrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return { episodes, loading, page, hasMore, loadNext, loadPrev };
}