
import axios from "axios";
import { useQuery } from "react-query";

export const BASE_URL = "http://localhost:4000/countries";

export interface Country {
  country: string,
  _id: string
};

export function useCountries() {
  return useQuery<Country[], Error>('countries', async () => {
    return (await axios.get(BASE_URL)).data;
  });
}
