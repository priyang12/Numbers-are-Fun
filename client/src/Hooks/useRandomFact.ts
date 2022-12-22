import axios from "axios";
import { useQuery } from "react-query";

export const useRandomFact = (type: string) => {
  return useQuery(`Random`, async () => {
    const { data } = await axios.get(
      `http://localhost:5001/api/?ApiCall=random/${type}`
    );
    return data;
  });
};
