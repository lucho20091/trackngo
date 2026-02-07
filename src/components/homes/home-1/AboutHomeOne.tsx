import { Link } from "react-router-dom";


export default function AboutHomeOne() {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" />ABOUT US</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Your Logistics Partner on Every Mile.
                  </h2>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                  We’re more than a freight carrier—we’re your long-term logistics partner. From the first mile to the final destination, our experienced team ensures every shipment is handled with care, precision, and real-time visibility.
                </p>
                <div className="icon-box wow fadeInUp" data-wow-delay=".5s">
                  <div className="icon">
                    <img src="assets/img/home-1/about/about-icon-01.svg" alt="img" />
                  </div>
                  <img src="assets/img/home-1/about/drive.png" alt="" />
                  <div className="content">
                    <h4>Full Truckload (FTL)</h4>
                    <p>Ideal for high-volume shipments needing dedicated transport.</p>
                  </div>
                </div>
                <div className="icon-box wow fadeInUp" data-wow-delay=".7s">
                  <div className="icon">
                    <img src="assets/img/home-1/about/about-icon-02.svg" alt="img" />
                  </div>
                  <img src="assets/img/home-1/about/drive.png" alt="" />
                  <div className="content">
                    <h4>Temperature-Controlled Transport</h4>
                    <p>Specialized vehicles for sensitive cargo like food or pharma.</p>
                  </div>
                </div>
                <div className="main-button  wow fadeInUp" data-wow-delay=".9s">
                  <Link to="/about"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="assets/img/home-1/about/about-01.png" alt="img" />
                <div className="about-count-box">
                  <img src="assets/img/home-1/about/about-shape.png" alt="img" />
                  <div className="about-counter-item">
                    <h2><span className="count">10</span>+</h2>
                    <p>Years of <br /> Experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
