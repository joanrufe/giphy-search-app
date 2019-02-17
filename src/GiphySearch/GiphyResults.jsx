import React from 'react';

function GiphyResults({ data, pagination, pageChange }) {
	return (
		<div>
			{data.map((item) => <GiphyItem key={item.id} {...item} />)}
			<Paginator pagination={pagination} pageChange={pageChange} />
		</div>
	);
}

function Paginator({ pagination, pageChange }) {
	const { total_count, count } = pagination;
	const totalPages = total_count / count || 0;
	const pagesArray = totalPages && Array.from(Array(parseInt(totalPages)).keys());
	let pages = [];
	if (totalPages) {
		pages = pagesArray.slice(0, 3);
		pages.push('...');
		pages.push(pagesArray[pagesArray.length - 1]);
	}
	return (
		<div>
			<ul style={{ listStyle: 'none' }}>
				{pages.map((page, i) => (
					<li style={{ display: 'inline', margin: '5px' }} key={page}>
						{page === '...' ? (
							'...'
						) : (
							<a
								href={`#${page}`}
								onClick={(e) => {
									e.preventDefault();
									pageChange(page);
								}}
							>
								{page}
							</a>
						)}
					</li>
				))}
			</ul>
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
