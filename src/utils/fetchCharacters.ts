import axios from "axios";
import { useEffect, useState } from "react";

export type Characters = {
  count: number;
  next: string;
  previous: null;
  pages: number;
  results: [
    {
      id: number;
      name: string;
      birthdate: string;
      age: number;
      occupation: string;
      status: string;
      phrases: string[];
      portrait_path: string;
    }
  ]
};


export default function GetSimpsonsCharacterData() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    axios.get('https://thesimpsonsapi.com/api/characters')
      .then(response => setCharacters(response.data.results))
  }, []);

  return characters
}