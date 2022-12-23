import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

export type CustomAxiosError = AxiosError<{
  msg: string;
}>;

export const useMultipleFacts = (start: number, end: number, type: string) => {
  return useQuery<string, CustomAxiosError>(
    `Multiple/${start}/${end}/${type}`,
    async () => {
      const { data }: AxiosResponse<string> = await axios.get(
        `/api?ApiCall=${start}..${end}/${type}`
      );
      return data;
    }
  );
};
