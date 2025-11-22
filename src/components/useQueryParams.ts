import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getArray = (key: string): string[] => {
    const value = searchParams.get(key);
    return value ? value.split(",") : [];
  };

  const setArray = (key: string, values: string[]) => {
    if (values.length === 0) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, values.join(","));
    }
    setSearchParams(searchParams);
  };

  return { getArray, setArray, searchParams };
}
