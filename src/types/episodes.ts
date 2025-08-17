
export type Episodes = {
  id: number;
  airdate: string;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}

export type EpisodesResponse = {
  count: number;
  next: string;
  previous: null;
  pages: number;
  results: Episodes[];
};