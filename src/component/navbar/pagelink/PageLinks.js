import { pageLinks } from "../../../data";

import PageLink from "./PageLink";


const PageLinks = ({ color }) => {
  return (
    <ul className={color}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} />;
      })}
    </ul>
  );
};

export default PageLinks;
