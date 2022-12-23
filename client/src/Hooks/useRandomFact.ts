import axios from "axios";
import { useQuery } from "react-query";

export const useRandomFact = (type: string) => {
  return useQuery(`Random`, async () => {
    const { data } = await axios.get(`/api/?ApiCall=random/${type}`);
    return data;
  });
};
