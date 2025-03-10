import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const BASE_URL = "http://localhost:4000";

export const axiosClient = axios.create({ baseURL: BASE_URL });

export interface Country {
  name: string;
  _id: string;
}

const fetchCountries = async () => (await axiosClient.get('/countries')).data;

export function useCountries() {
  return useQuery<Country[], Error>({ queryKey: ["countries"], queryFn: fetchCountries });
}
