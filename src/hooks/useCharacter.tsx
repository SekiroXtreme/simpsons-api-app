import { useEffect, useState } from "react";
import axios from "axios";
import type { Characters, CharactersResponse, Character } from "../types";
import { useSearchParams } from "react-router-dom";

export function useCharacters() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get<CharactersResponse>(
          `https://thesimpsonsapi.com/api/characters?page=${page}`
        );
        if (isMounted) {
          setCharacters(response.data.results);
          setHasMore(response.data.results.length > 0);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        if (isMounted) {
          setCharacters([]);
          setHasMore(false);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacters();
    setSearchParams({ page: page.toString() });

    return () => {
      isMounted = false;
    };
  }, [page, setSearchParams]);

  const loadNext = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const loadPrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return { characters, loading, page, hasMore, loadNext, loadPrev };
}

export function useCharacter(id: number | null) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Character>(
          `https://thesimpsonsapi.com/api/characters/${id}`
        );
        if (isMounted) {
          setCharacter(response.data);
        }
      } catch (error) {
        console.error("Error fetching character:", error);
        if (isMounted) setCharacter(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCharacter();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { character, loading };
}
