import { useState, useEffect } from 'react';

/**
 * Custom React hook to fetch data from an API.
 * Manages loading state, error handling, and stores fetched data.
 *
 * @param {string} apiUrl - The URL to fetch data from.
 * @returns {{ data: any, isLoading: boolean, hasError: boolean }} 
 * An object containing the fetched `data`, a loading state `isLoading`,
 * and an error flag `hasError`.
 *
 * @example
 * const { data, isLoading, hasError } = useFetch('/api/products');
 */
function useFetch(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getData(url) {
      try {
        setHasError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        return json;
      } catch (error) {
        setHasError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(apiUrl);
  }, [apiUrl]);

  return {
    data,
    isLoading,
    hasError,
  };
}

export { useFetch };
