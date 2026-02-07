

export default function FeaturesHomeThree() {
  return (
    <section className="feature-section-3 section-padding fix bg-cover"
      style={{ backgroundImage: `url(/assets/img/home-3/feature/feature-bg.jpg)` }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="feature-box-items">
              <div className="feature-icon-box">
                <div className="icon">
                  <img src="assets/img/home-3/feature/feature-icon-01.svg" alt="img" />
                </div>
                <h3>
                  Land Freight Services
                </h3>
              </div>
              <p>
                We provide dependable land freight solutions with flexible routes, timely deliveries, and tailored logistics.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="feature-box-items">
              <div className="feature-icon-box">
                <div className="icon">
                  <img src="assets/img/home-3/feature/feature-icon-02.svg" alt="img" />
                </div>
                <h3>
                  Ocean Freight Solutions
                </h3>
              </div>
              <p>
                Reliable and cost-effective ocean freight solutions tailored to your business needs—connecting global ports
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="feature-box-items">
              <div className="feature-icon-box">
                <div className="icon">
                  <img src="assets/img/home-3/feature/feature-icon-03.svg" alt="img" />
                </div>
                <h3>
                  Air Cargo Transportation
                </h3>
              </div>
              <p>
                Fast, secure, and efficient air cargo freight transportation designed to meet tight deadlines—ensuring your shipments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
