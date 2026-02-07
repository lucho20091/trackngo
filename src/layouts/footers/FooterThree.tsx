 
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageLightbox from "../../modal/ImageLightbox";

export default function FooterThree() {

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "assets/img/home-1/footer/gallery-1.png",
    "assets/img/home-1/footer/gallery-2.png",
    "assets/img/home-1/footer/gallery-3.png", 
  ]

  const images_1 = [ 
    "assets/img/home-1/footer/gallery-4.png",
    "assets/img/home-1/footer/gallery-5.png",
    "assets/img/home-1/footer/gallery-6.png",
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <footer className="footer-section-3 fix  bg-cover" style={{ backgroundImage: `url(/assets/img/home-1/footer-bg.jpg)` }}>
        <div className="container">
          <div className="footer-top-3">
            <h3>Sign up Today to Get the Latest <br />
              Inspiration & Insights</h3>
            <form action="#">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" id="email2" placeholder="Enter your email" />
              <button type="submit">SUBSCRIBE NOW</button>
            </form>
          </div>
          <div className="footer-widget-wrapper style-3">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/">
                      <img src="assets/img/home-3/footer-3-logo.png" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      There are emits consectetur notted aetinciduns pisicing jutre elit sed at eiusmode tempors.There are emits consectetur notted aetincidun
                    </p>
                    <span>Follow Us</span>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>
                  <ul className="footer-contact-3">
                    <li>
                      <div className="icon-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="content">
                          <span>3891 Ranchview Dr. Richardson, California 62639</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="content">
                          <span>infortrackgo@gmail.com</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Open Hours</h3>
                    <span className="mb-2"> Mon – Sat: 8:00 am to 6:00 pm</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Service</h3>
                  </div>
                  <ul className="list-area">
                    <li><Link to="/service-details">Container Tracking & Monitoring</Link></li>
                    <li><Link to="/service-details">Marine Insurance Coordination</Link></li>
                    <li><Link to="/service-details">Full Container Load (FCL) Ship..</Link></li>
                    <li><Link to="/service-details">Jet Set Journeys</Link></li>
                    <li><Link to="/service-details">Dream Destinations Travel</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Gallery</h3>
                  </div>
                  <div className="gallery-items d-flex align-items-center">
                    {images.map((item, i) => (
                      <div key={i} className="gallery-image">
                        <a onClick={() => openLightbox(i)}
                          style={{ cursor: 'pointer' }} className="img-popup">
                          <img src={item} alt="img" />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="gallery-items d-flex align-items-center">
                    {images_1.map((item, i) => (
                      <div key={i} className="gallery-image">
                        <a onClick={() => openLightbox(i)}
                          style={{ cursor: 'pointer' }} className="img-popup">
                          <img src={item} alt="img" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper justify-content-center">
              <p>
                © All Copyright {new Date().getFullYear()} by <Link to="/">Trackngo</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <ImageLightbox
        images={images}
        isOpen={lightboxOpen}
        initialIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
      />

    </>
  )
}
