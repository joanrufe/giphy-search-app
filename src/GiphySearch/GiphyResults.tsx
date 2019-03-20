import React from "react";
import Pagination from "antd/lib/pagination";
import Card from "antd/lib/card";
import "antd/dist/antd.css";
import Query from "../utils/QueryModel";
import { defaultQuery } from "./GiphySearch";

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

function GiphyResults({ data, pagination, pageChange, query }: ResultsProps) {
  const { total_count, count, offset } = pagination;
  const defaultLimit = defaultQuery.limit || 10;
  const currentIndex = Math.floor(offset / defaultLimit) + 1;
  console.log(currentIndex);

  return (
    <>
      <div className="items">
        {data.map((item: any) => (
          <GiphyItem key={item.id} {...item} />
        ))}
      </div>
      <div className="footer">
        <Pagination
          current={currentIndex}
          size={offset.toString()}
          key={offset / defaultLimit}
          total={total_count - defaultLimit}
          pageSize={defaultQuery.limit}
          onChange={page => {
            const newOffset = (page - 1) * defaultLimit;
            pageChange(newOffset);
          }}
          showSizeChanger
          simple
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

function GiphyItem({ title, ...extra }: ItemProps) {
  const { url, width, height } = extra.images.fixed_width;
  console.log(extra.images);
  return (
    <Card
      style={{ width: 240, margin: "20px auto", height: "fit-content" }}
      cover={<img width={width} height={height} src={url} alt={title} />}
    >
      <Card.Meta
        title={
          <a href={url} target="_blank">
            {title}
          </a>
        }
      />
    </Card>
  );
}

export default GiphyResults;
