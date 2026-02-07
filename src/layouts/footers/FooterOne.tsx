import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <footer
      className="footer-section fix bg-cover"
      style={{ backgroundImage: `url(/assets/img/home-1/footer-bg.jpg)` }}
    >
      <div className="container">
        <div className="footer-top-items">
          <div className="footer-logo">
            <Link to="/">
              <img src="assets/img/home-1/footer-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <h3>Subscribe Newsletter</h3>
          <form action="#">
            <input type="email" id="email2" placeholder="Your Email Address" />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div
                className="single-footer-widget single-border wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="widget-head">
                  <h3>Get in Touch</h3>
                </div>
                <ul className="footer-contact cont">
                  <li>
                    <div className="icon-location">
                      <i className="fa-solid fa-location-dot"></i>
                      <div className="content">
                        <h6>Corporate Office</h6>
                        <span>
                          3891 Ranchview Dr. Richardson, California 62639
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <a href="tel:7045550127">Call Us: +1-416-8241228</a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com" className="link">
                      Email: infotrackgo@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="single-footer-widget wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="widget-head">
                  <h3>Service</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/service-details">Freight Transportation</Link>
                  </li>
                  <li>
                    <Link to="/service-details">
                      Warehousing & Distribution
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details">Supply Chain Management</Link>
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
            <div className="col-lg-2">
              <div
                className="single-footer-widget wow fadeInUp"
                data-wow-delay=".7s"
              >
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
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              © All Copyright {new Date().getFullYear()} Website worked by{" "}
              <Link to="https://www.sitequicker.com" target="_blank">
                Sitequicker
              </Link>
            </p>
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
    </footer>
  );
}
