import React from 'react';

const PageLink = ({link, style}) => {
  return (
    <li className={style} key={link.id}>
     <a href={link.href}>{link.text}</a>
    </li>
  );
}

export default PageLink;
