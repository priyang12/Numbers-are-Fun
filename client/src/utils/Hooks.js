import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, setCount, increment, decrement };
};

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState(null);
  const [Error, setError] = useState(null);
  const start = useRef(true);
  useEffect(() => {
    let fetchData = async () => {
      console.log("API CALL");
      try {
        setLoading(true);
        const { data } = await axios.get("/api" + url);
        setFact(data);
        setError(null);
      } catch (error) {
        const err = error.response?.data || "SERVER ERROR";
        setError(err);
        setFact(null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchData();
    return () => {
      start.current = null;
    };
  }, [url]);

  return { loading, fact, Error };
};
