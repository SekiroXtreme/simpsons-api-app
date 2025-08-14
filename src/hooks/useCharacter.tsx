import { useEffect, useState } from "react";
import axios from "axios";
import type { Characters, Character, CharactersResponse } from "../types";

export function useCharacters(id?: string) {
  const [characters, setCharacters] = useState<Characters[] | Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      setLoading(true);

      try {
        if (id) {
          // Obtener un solo personaje detallado
          const response = await axios.get<Character>(
            `https://thesimpsonsapi.com/api/characters/${id}`
          );
          if (isMounted) setCharacters([response.data]); // siempre como array
        } else {
          // Obtener todos los personajes (lista)
          const response = await axios.get<CharactersResponse>(
            "https://thesimpsonsapi.com/api/characters"
          );
          if (isMounted) setCharacters(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        if (isMounted) setCharacters([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacters();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { characters, loading };
}
