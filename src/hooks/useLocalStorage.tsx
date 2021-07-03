import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(item: T, key: string) => {
  const [data, setData] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : item
  );
  const resetStorage = (key: string) => {
    return localStorage.removeItem(key);
  };

  useEffect(() => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData, resetStorage];
};
