import { pageLinks } from "../../../data";

import PageLink from "./PageLink";

import Style from "./page-link.module.css"

const PageLinks = () => {
  return (
    <ul className={Style.pageLink}>
      {pageLinks.map((link) => {
     
        return <PageLink key={link.id} link={link} />;
      })}
    </ul>
  );
};

export default PageLinks;
