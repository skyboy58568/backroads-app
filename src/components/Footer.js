
import PageLinks from "./Pagelinks"
import Sociallinks from "./SocialLink"


export default function Footer(){
    return(
        <footer className="section footer">
        {/* <ul className="footer-links">


          {pagelinks.map(link => <li><a href={link.href} className="footer-link">{link.text}</a></li>)}
    
        </ul> */}

        <PageLinks parentClass='footer-links' itemClass='footer-link'></PageLinks>
      <Sociallinks parentClass='footer-icons' itemClass='footer-icon'></Sociallinks>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    )
}