import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, setCount, increment, decrement };
};

export const useFetch = (url) => {
  const [Call, setCall] = useState({
    FetchedData: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    let fetchData = async () => {
      setCall({ loading: true });
      try {
        const { data } = await axios.get("/api" + url);
        setCall({ FetchedData: data, loading: false, error: null });
      } catch (error) {
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
