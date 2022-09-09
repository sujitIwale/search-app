import { useState } from "react";

const useLocalStorage = (key: string, initialValue?: any) => {
  const [StoredValue, setStoredValue] = useState(() => {
    if (window === undefined) return initialValue;

    try {
      let item = window.localStorage.getItem(key);
      console.log(item);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      if (window !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {}
  };

  return [StoredValue, setValue];
};

export default useLocalStorage;
