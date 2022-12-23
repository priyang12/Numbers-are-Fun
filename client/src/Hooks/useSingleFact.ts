import axios from "axios";
import { useQuery } from "react-query";

export const useSingleFact = (Number: number, type: string) => {
  return useQuery(`single/${Number}/${type}`, async () => {
    const { data } = await axios.get(`/api/?ApiCall=${Number}/${type}`);
    return data;
  });
};
