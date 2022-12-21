import { useCallback, useState } from "react";

export const useCounter = (initialState: number) => {
  const [count, setCount] = useState(initialState);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, setCount, increment, decrement };
};
