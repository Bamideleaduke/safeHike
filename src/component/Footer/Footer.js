import PageLinks from "../navbar/pagelink/PageLinks"
import SocialLinks from "../navbar/sociallinks/SocialLinks"


const Footer = () => {
  return (
    <footer>
      <PageLinks className="footer-page-link" />
      <SocialLinks  className="footer-social-link"/>

      <p>
        Copyright &copy; Barakat@Dip <span>{new Date().getFullYear()}.</span>
      </p>
    </footer>
  )
}

export default Footer
