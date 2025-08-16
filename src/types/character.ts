import type { Episodes } from "./episodes";

export type Characters = {
  id: number;
  name: string;
  birthdate: string;
  age: number;
  occupation: string;
  status: string;
  phrases: string[];
  portrait_path: string;
}



export type Character = {
  id:number;
  age: number;
  birthdate: string;
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  gender: string;
  name: string;
  occupation: string;
  phrases: string[];
  portrait_path: string;
  status: string;
  first_appearance_ep: Episodes;
}

export type CharactersResponse = {
  count: number;
  next: string;
  previous: null;
  pages: number;
  results: Characters[];
};

