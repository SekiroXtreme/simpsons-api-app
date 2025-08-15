import { useEffect, useState } from "react";
import type { EpisodesResponse, Episodes } from "../types";
import axios from "axios";

export function useEpisodes(id?: string){
  const [episodes, setEpisodes] = useState<Episodes[]>([]);

  useEffect( () =>{
    const fetchEpisodes = async () =>{
      try {
        if(id){
          const response = await axios.get<Episodes>(
            `https://thesimpsonsapi.com/api/episodes/${id}`
          );
          setEpisodes([response.data]) 
        }else{
          const response = await axios.get<EpisodesResponse>(
            'https://thesimpsonsapi.com/api/episodes'
          );
           setEpisodes(response.data.results)
        };
      }catch(error){
        console.log("Error Fetching Episodes", error)
      }
    };
      fetchEpisodes();
    
  },[id])

  return{episodes}
}
