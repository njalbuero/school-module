import { useEffect, useState } from 'react';

/**
 * Reads and writes a JSON value in localStorage. Falls back to in-memory state
 * when storage is unavailable (private browsing, full quota, old browser).
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? initialValue : (JSON.parse(raw) as T);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage is unavailable; the module still works for this session.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
