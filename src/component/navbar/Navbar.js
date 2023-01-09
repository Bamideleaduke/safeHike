import React from "react";
import PageLinks from "./pagelink/PageLinks";
import SocialLinks from "./sociallinks/SocialLinks";
import style from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={style.headerNav} >
     <div className={style.navContainer}>
     <h2 className={style.logo}>Safe<span className={style.logoSpan}>Hike</span></h2>
      <PageLinks />
      <SocialLinks />
     </div>
    </nav>
  );
}

export default Navbar;
