import React from 'react';
import Page from './Page';

function Paginator({ pagination, pageChange }) {
	const { total_count, count, offset } = pagination;
	const totalPages = total_count / count || 0;
  const currentIndex = offset / count;
  
  // create an array of numbers [0,1,2,3....totalPages]
  const pagesArray = totalPages && Array.from(Array(parseInt(totalPages)).keys());
  
  if (totalPages < 10) {
    return (
      pagesArray.map(page => (
        <Page page={page} pageChange={pageChange}>{page}</Page>
      ))
    )
  }

	return (
		<div>
			<ul style={{ listStyle: 'none' }}>
				{
          pagesArray.map((page, i) => {
            const isPrevIndex = page === currentIndex - 1;
            const isNextIndex = page === currentIndex + 1;
            const isCurrentIndex = currentIndex === page;
            const isLastIndex = currentIndex === totalPages - 1;

            if (isCurrentIndex || isLastIndex) {
              return <Page key={page} disabled>{page}</Page>;
            }

            if (isPrevIndex || isNextIndex) {
              return (
                <Page page={page} pageChange={pageChange}>
                  { isPrevIndex && totalPages > 10 && '<' }
                  { isNextIndex && totalPages > 10 && '>' }
                </Page>
              );
            }
          })
        }
			</ul>
		</div>
	);
}

export default Paginator;