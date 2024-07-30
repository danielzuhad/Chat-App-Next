"use client";

import { useState, useEffect } from "react";

// Custom Hook to handle debouncing
function useDebounce(value: string, delay: number): string {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
