import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type useLocalStorageType = <T>(
  item: T,
  key: string
) => [T, Dispatch<SetStateAction<T>>, () => void];

export const useLocalStorage: useLocalStorageType = <T,>(
  item: T,
  key: string
) => {
  const [data, setData] = useState<T>(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : item
  );
  const resetStorage = () => {
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
