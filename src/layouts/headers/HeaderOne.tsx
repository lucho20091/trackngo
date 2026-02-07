import { useState } from "react";
import Navmenu from "./Navmenu";
import { Link } from "react-router-dom";
import UseSticky from "../../hooks/UseSticky";
import OffCanvasArea from "../../common/OffCanvasArea";

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header
        id="header-sticky"
        className={`header-1 ${sticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo2">
                  <Link to="/" className="header-logo">
                    <img src="assets/img/home-1/Logo-1.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img src="assets/img/home-1/Logo.svg" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="mean__menu-wrapper ralt">
                <ul className="contact-list">
                  <li>
                    <i className="far fa-envelope"></i>
                    <a href="mailto:Infotrackgo@email.com" className="link">
                      Infotrackgo@email.com
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>612-7 Roanoke Rd, Toronto, ON M4D 23, UK</span>
                  </li>
                </ul>
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <Navmenu has_search={true} />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div
                  className="main-button mt-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <Link to="/contact">
                    {" "}
                    <span className="theme-btn"> get A Quote </span>
                    <span className="arrow-btn">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasArea menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
