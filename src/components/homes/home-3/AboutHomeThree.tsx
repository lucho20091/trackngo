 
import { Link } from "react-router-dom";
import Count from "../../../common/count";


export default function AboutHomeThree() {
  return (
    <section className="about-section-3 section-padding fix bg-cover" style={{ backgroundImage: `url(/assets/img/home-3/about/about-bg.jpg)` }}>
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image-items">
                <img src="assets/img/home-3/about/about-01.png" alt="img" />
                <div className="about-counter">
                  <h3><span> <Count number={25} text="+" /> </span></h3>
                  <p>Years of Experience in the <br />Trackgo Field.</p>
                </div>
                <div className="about-shape">
                  <img src="assets/img/home-3/about/about-line-shape.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> About Us</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Delivering Excellence Across Every Ocean
                  </h2>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                  Our ocean freight services ensure safe, timely, and cost-effective shipping—backed by global expertise, smart logistics, and a commitment to excellence across every route.
                </p>
                <div className="icon-box wow fadeInUp" data-wow-delay=".5s">
                  <div className="icon">
                    <img src="assets/img/home-3/about/about-icon.png" alt="img" />
                  </div>
                  <div className="content">
                    <h4>Our History</h4>
                    <p>Decades of trusted sea freight experience, navigating global trade with precision and care.</p>
                  </div>
                </div>
                <div className="about-list wow fadeInUp" data-wow-delay=".7s">
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      Freight Forwarding
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      Warehousing & Delivery
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      Customs Clearance
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      Freight Forwarding
                    </li>
                  </ul>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".9s">
                  <Link to="/about">
                    <span className="theme-btn"> READ MORE </span>
                    <span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
