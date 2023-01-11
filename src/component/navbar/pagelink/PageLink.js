import React from 'react';

const PageLink = ({link}) => {
  return (
    <li  key={link.id} >
     <a href={link.href} >{link.text}</a>
    </li>
  );
}

export default PageLink;
