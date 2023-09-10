import axios from "axios";

export interface Person {
  id: number;
  name: string;
  status: string;
  image: string;
}

export const getPerson = async (ids: number[]) => {
  const response = await axios.get<Person[]>(
    "https://rickandmortyapi.com/api/character/" + ids
  );
  return response.data;
};
