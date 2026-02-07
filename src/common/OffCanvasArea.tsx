 
import { Link } from "react-router-dom";
import MobileMenu from "../layouts/headers/MobileMenu";

interface OffCanvasAreaProps {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OffCanvasArea({ menuOpen, setMenuOpen }: OffCanvasAreaProps) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${menuOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src="assets/img/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@example.com">info@example.com</span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="main-button mt-4 wow fadeInUp" data-wow-delay=".5s">
                  <Link to="/contact">
                    <span className="theme-btn"> get A Quote </span>
                    <span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${menuOpen ? "overlay-open" : ""}`} onClick={() => setMenuOpen(false)} style={{cursor: 'pointer'}}></div>
    </>
  )
}
