import React, { useRef, useEffect } from 'react';
import useGiphyApi from '../utils/useGiphyApi';
import GiphyResults from './GiphyResults';
import Input from 'antd/lib/input/';
import Form from 'antd/lib/form/';
import Layout from 'antd/lib/layout';
import {parse} from 'query-string';
import QueryModel from '../utils/QueryModel'

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
	console.log(initialQuery);
	const { error, loading, data, pagination, fetchGifs, query } = useGiphyApi(initialQuery);

	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const current : HTMLElement | null = searchInputRef.current;
		if(current) {
			current.focus();
		}
	});

	const onSubmit = (ev : React.FormEvent<HTMLFormElement>) => {
		const { value } = searchInputRef.current || { value: '' };
		const query : QueryModel= {
			q: value,
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
			<Content style={{margin: '20px auto 20px auto'}}>
				<Form onSubmit={onSubmit}>
					Enter a word or phrase:
					<Form.Item>
						<Input.Search
							autoFocus
							enterButton
							defaultValue={initialQuery.q}
							onSearch={(value) => {
								fetchGifs({q: value})
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
							Total Items <span>{pagination.total_count}</span>
							<GiphyResults data={data} pagination={pagination} pageChange={pageChange} query={query}/>
						</div>
					)
				}
			</Content>
		</Layout>
	);
};

export default GiphySearch;
