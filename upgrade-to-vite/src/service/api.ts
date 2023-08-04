// import axios from "axios";
// import { useQuery } from "react-query";

// export const BASE_URL = "http://localhost:4000";

// export const axiosClient = axios.create({ baseURL: BASE_URL });

// export interface Country {
//   name: string,
//   _id: string
// };

// export function useCountries() {
//   return useQuery<Country[], Error>('countries', async () => {
//     return (await axiosClient.get('/countries')).data;
//   });
// }
