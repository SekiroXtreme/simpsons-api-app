import axios from "axios";
import { useEffect, useState } from "react";
import type { Characters, CharactersResponse } from "../types";

const fetchCharacters = async () => {
      const response = await axios.get<CharactersResponse>('https://thesimpsonsapi.com/api/characters')
      return response.data.results
    }


export function useCharacters(id?: string) {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect( () => {
    const getCharacters = async () => {
      const response = await axios.get<CharactersResponse>('https://thesimpsonsapi.com/api/characters')
      setCharacters(response.data.results)
    }

    fetchCharacters()
   
  }, []);

  return {characters}
}