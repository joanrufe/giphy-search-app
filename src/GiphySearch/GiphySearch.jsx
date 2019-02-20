import React, { useRef, useEffect } from 'react';
import useGiphyApi from '../utils/useGiphyApi';
import GiphyResults from './GiphyResults';

const deFaultLimit = 10;

function GiphySearch({ initialQuery }) {
	const { error, loading, data, pagination, setQuery } = useGiphyApi({
		q: initialQuery,
		limit: deFaultLimit
	});
	const searchInputRef = useRef(null);
	useEffect(() => {
		searchInputRef.current.focus();
	});
	const onSubmit = (ev) => {
		ev.preventDefault();
		const query = {
			q: ev.target.elements.query.value,
			offset: 0,
			limit: deFaultLimit
		};
		setQuery(query);
	};
	const pageChange = (page) => {
		setQuery({ offset: pagination.count * page });
	};

	return (
		<div>
			<section>
				<form style={{marginBottom: '10px'}} onSubmit={onSubmit}>
					Enter a word or phrase:
					<input type="text" name="query" ref={searchInputRef} defaultValue={initialQuery} />
					<button type="submit">Search</button>
				</form>
			</section>
			<section>
				{error && <div>{error.toString()}</div>}
				{!error && loading && <div>Loading...</div>}
				{!loading && !error && pagination && pagination.total_count === 0 && <div>No Results Found</div>}
				{!loading &&
				!error && (
					<div>
						Total Items <span>{pagination.total_count}</span>
						<GiphyResults data={data} pagination={pagination} pageChange={pageChange} />
					</div>
				)}
			</section>
		</div>
	);
};

export default GiphySearch;
