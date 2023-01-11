import { socialLinks } from "../../../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({color}) => {
  return <ul className={color}>
  {socialLinks.map((link) => {
  return  <SocialLink key={link.id} link={link} href={link.href} icon={link.icon}  />
  })}
  </ul>;
};

export default SocialLinks;
