import React from "react";

function Page({page, pageChange, children, disabled}) {
  const onClick = (e) => {
    e.preventDefault();
    pageChange(page);
  };
  return (
    <li style={{ display: 'inline', margin: '5px' }}>
      {
        !disabled ? (
          <a href={`#${page}`} onClick={onClick}>
            {children}
          </a>
        ) : children
      }
    </li>
  );
}

export default Page;