import React from 'react';
import Pagination from 'antd/lib/pagination';
import Card from 'antd/lib/card';
import { objectToQueryString } from '../utils/useGiphyApi'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Query from '../utils/QueryModel';

interface PaginationObject {
  total_count: number;
  count: number;
  offset: number;
}


interface ResultsProps {
	data: Array<Object>;
	pagination: PaginationObject;
	pageChange: (newOffset: number) => void;
	query: Query;
}

function GiphyResults({ data, pagination, pageChange, query } : ResultsProps) {
	const { total_count, count, offset } = pagination;
  const currentIndex = Math.floor(offset / count) + 1;

	return (
		<>
			<div className="items">
				{data.map((item : any) => <GiphyItem key={item.id} {...item} />)}
			</div>
			<div className="footer">
				<Pagination
					current={currentIndex}
					key={currentIndex}
					total={total_count}
					pageSize={count}
					showQuickJumper
					itemRender={(page, type) => {
						if (type === 'jump-prev') {
							return <Link to={`${location.pathname}${objectToQueryString({...query, offset: page*count})}`}>{'<<'}</Link>;
						}
						if (type === 'jump-next') {
							return <Link to={`${location.pathname}${objectToQueryString({...query, offset: page*count})}`}>{'>>'}</Link>;
						}
						if (type === 'prev') {
							return <Link to={`${location.pathname}${objectToQueryString({...query, offset: page*count})}`}>{'<'}</Link>;
						}
						if (type === 'next') {
							return <Link to={`${location.pathname}${objectToQueryString({...query, offset: page*count})}`}>{'>'}</Link>;
						}
						return <Link to={`${location.pathname}${objectToQueryString({...query, offset: page*count})}`}>{page}</Link>;
					}}
					onChange={(page) => {
						pageChange(page*count - count)
					}}
				/>
			</div>
		</>
	);
}

interface ItemProps {
	title: string;
	images: any;
	source_tld: string;
}

function GiphyItem({ title, ...extra } : ItemProps) {
	const { url, width, height } = extra.images.fixed_width;

	return (
		<Card
			style={{ width: 240, margin: '20px auto', height: 'fit-content' }}
			cover={
				<img width={width} height={height} src={url} alt={title} />
			}>
			<Card.Meta title={<a href={url} target="_blank">{title}</a>}/>
		</Card>
	);
}

export default GiphyResults;
