import React, { useState } from 'react';
import useGiphyApi from '../utils/useGiphyApi';
import GiphyResults from './GiphyResults';
import Search from 'antd/lib/input/Search';
import Form from 'antd/lib/form/';
import Layout from 'antd/lib/layout';
import {parse} from 'query-string';
import QueryModel from '../utils/QueryModel'
import './GiphySearch.css';

const {
  Header, Content,
} = Layout;


const defaultQuery : QueryModel = {
	q: 'cats',
	limit: 10,
	offset: 0
};

function GiphySearch({ location = { search: ''} } = {}) {
	const initialQuery : QueryModel = {
		...defaultQuery,
		...parse(location.search)
	};
	const [searchValue, setSearchValue] = useState('');
	const { error, loading, data, pagination, fetchGifs, query } = useGiphyApi(initialQuery);

	const onSubmit = (ev : React.FormEvent<HTMLFormElement>) => {
		const query : QueryModel= {
			q: searchValue,
			offset: 0,
			limit: initialQuery.limit
		};
		fetchGifs(query);
		ev.preventDefault();
	};

	const pageChange = (newOffset : number) => {
		fetchGifs({ offset: newOffset });
	};

	return (
		<Layout>
			<Header>
				<h1 style={{color: 'white', textAlign: 'center'}}>
					<a href={`${window.location.origin}${window.location.pathname}`}>Giphy Search App</a>
				</h1>
			</Header>
			<Content style={{width: '100%'}}>
				<Form onSubmit={onSubmit} style={{margin: '20px auto 20px auto', maxWidth: '250px'}}>
					<p>Enter a word or phrase:</p>
					<Form.Item>
						<Search
							autoFocus
							enterButton
							defaultValue={initialQuery.q}
							onSearch={(value) => {
								fetchGifs({q: value})
							}}
							onChange={evt => {
								setSearchValue(evt.target.value)
							}}
						/>
					</Form.Item>
				</Form>
				{error && <div>{error}</div>}
				{!error && loading && <div>Loading...</div>}
				{!loading && !error && pagination && pagination.total_count === 0 && <div>No Results Found</div>}
				{
					!loading &&!error && (
						<div>
							<p style={{textAlign: 'center'}}>Total Items <span>{pagination.total_count}</span></p>
							<GiphyResults data={data} pagination={pagination} pageChange={pageChange} query={query}/>
						</div>
					)
				}
			</Content>
		</Layout>
	);
};

export default GiphySearch;
