import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [Call, setCall] = useState({
    FetchedData: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    let fetchData = async () => {
      setCall({ ...Call, loading: true });
      try {
        const { data } = await axios.get("/api" + url);
        setCall({ FetchedData: data, loading: false, error: null });
      } catch (error: any) {
        const err = error.response?.data || "SERVER ERROR";
        setCall({ FetchedData: null, error: err, loading: false });
      }
    };
    fetchData();
    return () => {};
  }, [url]);

  return {
    loading: Call.loading,
    fact: Call.FetchedData,
    Error: Call.error,
  };
};
