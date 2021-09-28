import { useState, useCallback, useEffect, useRef } from 'react';
import axios from 'axios';

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);
  return [count, increment, decrement];
};

export const useFetch = (url) => {
  const [loading, setloading] = useState(false);
  const [fact, setfact] = useState(null);
  const [Error, setError] = useState(null);
  const start = useRef(true);
  useEffect(() => {
    let fetchData = async () => {
      try {
        setloading(true);
        console.log('API CALL');
        const { data } = await axios.get('http://localhost:5000/api' + url);
        console.log(data);
        setfact(data);
        setError(null);
      } catch (error) {
        const err = error.response?.data || 'SERVER ERROR';
        setError(err);
        setfact(null);
      } finally {
        setTimeout(() => {
          setloading(false);
        }, 1000);
      }
    };
    console.log(start);
    fetchData();
    return () => {
      start.current = null;
    };
  }, [url]);

  return { loading, fact, Error };
};
