import { socialLinks } from "../../../data";
import SocialLink from "./SocialLink";
import style from "./social-link.module.css"

const SocialLinks = () => {
  return <ul className={style.socialLink}>
  {socialLinks.map((link) => {
  return  <SocialLink key={link.id} link={link} href={link.href} icon={link.icon}/>
  })}
  </ul>;
};

export default SocialLinks;
