 
import { Link } from "react-router-dom";
import { useState } from "react";
import Navmenu from "./Navmenu";
import UseSticky from "../../hooks/UseSticky";
import SearchArea from "../../common/SearchArea";
import OffCanvasArea from "../../common/OffCanvasArea";


export default function HeaderThree() {

  const { sticky } = UseSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-section-3">
        <div className="container">
          <div className="header-wrapper-3">
            <Link to="/" className="head-logo d-none d-xxl-block">
              <img src="assets/img/home-2/logo.svg" alt="img" />
            </Link>
            <div className="head-right-item">
              <div className="header-top-wrapper-3">
                <ul className="head-top">
                  <li>
                    <img src="assets/img/home-2/email.png" alt="img" />
                    Infotrackgo@email.com
                  </li>
                  <li>
                    <img src="assets/img/home-2/bar.png" alt="img" />
                  </li>
                  <li>
                    <img src="assets/img/home-2/location.png" alt="img" />
                    612-7 Roanoke Rd, Toronto, ON M4D 23, UK
                  </li>
                </ul>
                <div className="heads-right">
                  <p>+ Track Your Order</p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </div>
                </div>
              </div>
              <div id="header-sticky" className={`header-3 ${sticky ? "sticky" : ""}`}>
                <div className="mega-menu-wrapper">
                  <div className="header-main">
                    <div className="header-left d-xxl-none">
                      <div className="logo">
                        <Link to="/" className="header-logo">
                          <img src="assets/img/logo.svg" alt="logo-img" />
                        </Link>
                      </div>
                    </div>
                    <div className="mean__menu-wrapper ralt">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                           <Navmenu has_search={false} />
                        </nav>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <a style={{ cursor: 'pointer' }} onClick={() => setSearchOpen(true)} className="search-trigger search-icon"><i className="fal fa-search"></i></a>
                      <div className="header-client-info">
                        <div className="icon">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="content">
                          <p>Make A Call</p>
                          <h4>+1 436 000 4395</h4>
                        </div>
                      </div>
                      <div className="header__hamburger">
                        <div className="sidebar__toggle" onClick={() => setMenuOpen(true)}>
                          <i className="fas fa-bars"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      <SearchArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <OffCanvasArea menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}
