import { useState, useEffect } from "react";

const buildUrl = query => {
  const encodedQuery = objectToQuerystring({
    ...query,
    api_key: "dc6zaTOxFJmzC"
  });
  return `https://api.giphy.com/v1/gifs/search${encodedQuery}`;
};

function objectToQuerystring(obj) {
  return Object.keys(obj).reduce(function(str, key, i) {
    let delimiter, val;
    delimiter = i === 0 ? "?" : "&";
    key = encodeURIComponent(key);
    val = encodeURIComponent(obj[key]);
    return [str, delimiter, key, "=", val].join("");
  }, "");
}

export default function useGiphyApi(initialQuery) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [respData, setResponseData] = useState(null);
  const [query, setQuery] = useState(initialQuery);

  useEffect(
    () => {
      async function fetchData() {
        setLoading(true);
        let response;
        let data;

        try {
          response = await fetch(buildUrl(query));
          data = await response.json();
        } catch (error) {
          setError(error)
        }
        
        setResponseData(data);
        setLoading(false);
      }
      fetchData();
    },
    [query]
  );
  const { data, pagination } = respData || {};
  return {
    error,
    loading,
    data,
    pagination,
    setQuery: query => setQuery(prevQuery => ({ ...prevQuery, ...query}))
  }
}
