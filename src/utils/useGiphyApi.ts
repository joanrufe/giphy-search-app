import { useState, useEffect } from 'react';
import QueryModel from './QueryModel';

const defaultResponse = {
	data: [],
	pagination: {
		count: 0,
		total_count: 0,
		offset: 0
	}
};

const baseUrl = 'https://api.giphy.com';
const searchRoute = '/v1/gifs/search';

const buildUrl = (query: QueryModel) => {
	const encodedQuery = objectToQueryString({
		...query,
		api_key: 'dc6zaTOxFJmzC'
	});
	return `${baseUrl}${searchRoute}${encodedQuery}`;
};

export function objectToQueryString(obj: QueryModel | any) {
	return Object.keys(obj).reduce(function(str, key, i) {
		let delimiter, val;
		delimiter = i === 0 ? '?' : '&';
		key = encodeURIComponent(key);
		val = encodeURIComponent(obj[key]);
		return [ str, delimiter, key, '=', val ].join('');
	}, '');
}

export default function useGiphyApi(initialQuery: QueryModel) {
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ respData, setResponseData ] = useState(null);
  const [ query, setQuery ] = useState(initialQuery);

  const fetchGifs = (query : QueryModel ) => {
    setQuery((prevQuery) => ({ ...prevQuery, ...query }));
  }

  // Handle history and document title
  useEffect(() => {
    const encodedQuery = objectToQueryString(query);
    history.pushState(encodedQuery, query.q || 'Giphy Search', encodedQuery);
  }, [query]);

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
					setError(error);
				}

				setResponseData(data);
				setLoading(false);
			}
			fetchData();
		},
		[ query ]
	);
	const { data, pagination } = respData || defaultResponse;
	return {
		error,
		loading,
		data,
		pagination,
		fetchGifs,
		query
	};
}
