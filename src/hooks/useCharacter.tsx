import { useEffect, useState } from "react";
import axios from "axios";
import type { Characters, CharactersResponse } from "../types";

export function useCharacters() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get<CharactersResponse>(
          "https://thesimpsonsapi.com/api/characters"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return { characters };
}