import { Link } from "react-router-dom";
export default function FooterTwo() {
  return (
    <footer
      className="footer-section-2 bg-cover fix"
      style={{ backgroundImage: `url(/assets/img/home-2/Footer-bg.png)` }}
    >
      <div className="footer-logo text-center">
        <Link to="/">
          <img src="assets/img/home-2/footer-logo.svg" alt="img" />
        </Link>
      </div>
      <div className="container">
        <div className="footer-widget-wrapper style-2">
          <div className="row g-4 justify-content-between">
            <div className=" col-xl-6 col-lg-6 ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Service</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <Link to="/service-details">
                          Freight Transportation
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-details">
                          Warehousing & Distribution
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-details">
                          Supply Chain Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-details">E-Commerce Solutions</Link>
                      </li>
                      <li>
                        <Link to="/service-details">
                          Rebranding and Brand Refresh
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Quick Link </h3>
                    </div>
                    <ul className="list-area ">
                      <li>
                        <Link to="/about">About Company </Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/project">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/news">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="footer-contact-2">
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <p>
                      3891 Ranchview Dr. <br /> Richardson, California 6263
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="content">
                    <p>
                      (954) 468 - 4326 <br />
                      (438) 222 - 5612
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" col-xl-5 col-lg-5 ">
              <div className="newsletter-box">
                <h3>Subscribe To Our Newsletters</h3>
                <p>
                  Stay updated with the latest trends, tips, and insights in air
                  logistics. Discover smarter shipping solutions delivered
                  straight to your inbox—fast, reliable, and industry-focused.
                </p>
                <form action="#">
                  <input
                    type="email"
                    id="email2"
                    placeholder="Your Email Address"
                  />
                  <button type="submit">SUBSCRIBE</button>
                </form>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
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
              © All Copyright {new Date().getFullYear()} Website worked by{" "}
              <Link to="https://www.sitequicker.com" target="_blank">
                Sitequicker
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
