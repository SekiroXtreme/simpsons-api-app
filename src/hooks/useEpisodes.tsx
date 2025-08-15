import { useEffect, useState } from "react";
import type { Episodes } from "../types";
import axios from "axios";

export function useEpisodes(id?: string){
  const [episodes, setEpisodes] = useState<Episodes[]>([]);

  useEffect( () =>{
    const fetchEpisodes = async () =>{
      try {
        if(id){
          const response = await axios.get<Episodes>(
            `https://thesimpsonsapi.com/api/episodes/${id}`
          )
        }
      }
    } 
  } )
}
