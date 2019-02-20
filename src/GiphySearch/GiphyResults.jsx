import React from 'react';
import Paginator from './Paginator';

function GiphyResults({ data, pagination, pageChange }) {
	return (
		<div>
			{data.map((item) => <GiphyItem key={item.id} {...item} />)}
			<Paginator pagination={pagination} pageChange={pageChange} />
		</div>
	);
}

function GiphyItem({ title, ...extra }) {
	const { url, width, height } = extra.images.fixed_width;

	return (
		<div style={{ marginBottom: '20px' }}>
			<img width={width} height={height} src={url} alt={title} />
			<div>{title}</div>
		</div>
	);
}

export default GiphyResults;
