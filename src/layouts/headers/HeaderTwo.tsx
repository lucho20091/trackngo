 
import { Link } from "react-router-dom";
import { useState } from "react";
import Navmenu from "./Navmenu";
import UseSticky from "../../hooks/UseSticky";
import SearchArea from "../../common/SearchArea";


export default function HeaderTwo() {
  const { sticky } = UseSticky();
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      <header id="header-sticky" className={`header-2 ${sticky ? "sticky" : ""}`}>
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
                <div className="main-menu">
                  <nav id="mobile-menu">
                     <Navmenu has_search={false} />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a style={{cursor: 'pointer'}} onClick={() => setSearchOpen(true)} className="search-trigger search-icon"><i className="fal fa-search"></i></a>
                <div className="main-button">
                  <Link to="/contact"> <span className="theme-btn"> get A Quote </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


    </>
  )
}
