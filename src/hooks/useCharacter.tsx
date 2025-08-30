import { useEffect, useState } from "react";
import axios from "axios";
import type { Characters, Character, CharactersResponse } from "../types";
import { useSearchParams } from "react-router-dom";

export function useCharacters(id?: string) {
  const [characters, setCharacters] = useState<Characters[] | Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // Leer y escribir el parámetro "page" en la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      setLoading(true);

      try {
        if (id) {
          // Obtener un solo personaje
          const response = await axios.get<Character>(
            `https://thesimpsonsapi.com/api/characters/${id}`
          );
          if (isMounted){ 
            setCharacters([response.data]);
          }
        } else {
          // Obtener personajes por página
          const response = await axios.get<CharactersResponse>(
            `https://thesimpsonsapi.com/api/characters?page=${page}`
          );
          if (isMounted) {
            setCharacters(response.data.results);
            setHasMore(response.data.results.length > 0);
          }
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        if (isMounted) setCharacters([]);
        setHasMore(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacters();

    // actualizar URL si no es un personaje individual
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

  return { characters, loading, page, hasMore, loadNext, loadPrev };
}