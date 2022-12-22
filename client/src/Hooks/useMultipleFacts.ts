import axios from "axios";
import { useQuery } from "react-query";

export const useMultipleFacts = (start: number, end: number, type: string) => {
  return useQuery(`Multiple/${start}/${end}/${type}`, async () => {
    const { data } = await axios.get(
      `http://localhost:5001/api?ApiCall=${start}..${end}/${type}`
    );
    return data;
  });
};
