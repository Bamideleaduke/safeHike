import React from "react";
import PageLinks from "./pagelink/PageLinks";
import SocialLinks from "./sociallinks/SocialLinks";
import style from "./navbar.module.css"
import stye2 from "./pagelink/page-link.module.css"
import style3 from "./sociallinks/social-link.module.css"

function Navbar({color}) {
  return (
    <nav className={style.headerNav} >
     <div className={style.navContainer}>
     <h2 className={style.logoSpan}>Safe<span className={style.logoSpan}>Hike</span></h2>
      <PageLinks color={stye2.pageLink}/>
      <SocialLinks color={style3.socialLink}/>
     </div>
    </nav>
  );
}

export default Navbar;
