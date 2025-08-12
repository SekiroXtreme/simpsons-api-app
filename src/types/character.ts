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

export type CharactersResponse = {
  count: number;
  next: string;
  previous: null;
  pages: number;
  results: Characters[];
};