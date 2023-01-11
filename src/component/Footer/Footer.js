import PageLinks from "../navbar/pagelink/PageLinks"
import SocialLinks from "../navbar/sociallinks/SocialLinks"
import pStyle from "../navbar/pagelink/page-link.module.css"
import sStyle from "../navbar/sociallinks/social-link.module.css"


const Footer = ({color}) => {
  return (
    <footer className="footerSect">
      <PageLinks color={pStyle.footerLink}/>
      <SocialLinks color={sStyle.socialFooter} />

      <p>
        Copyright &copy; Barakat@Dip <span>{new Date().getFullYear()}.</span>
      </p>
    </footer>
  )
}

export default Footer
