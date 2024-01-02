import logo from "../images/logo.svg";
import PageLinks from "./Pagelinks";
import Sociallinks from "./SocialLink";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLinks parentClass="nav-links" itemClass="nav-link"></PageLinks>

          <Sociallinks
            parentClass="nav-icons"
            itemClass="nav-icon"
          ></Sociallinks>
        </div>
      </nav>
    </div>
  );
}
