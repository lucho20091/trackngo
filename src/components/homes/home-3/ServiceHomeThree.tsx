import { Link } from "react-router-dom";


export default function ServiceHomeThree() {
  return (
    <section className="service-section-3 section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img src="assets/img/home-2/left.png" alt="img" /> Our Flight Plan
            <img src="assets/img/home-2/left.png" alt="img" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Reliable Air Cargo Services
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="service-box-items-3">
              <div className="service-content">
                <h3><Link to="/service-details">Container Tracking & Monitoring</Link></h3>
                <p>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
              </div>
              <div className="service-image">
                <img src="assets/img/home-3/service/service-01.png" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-3/service/service-icon-01.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="service-box-items-3">
              <div className="service-content">
                <h3><Link to="/service-details">Marine Insurance Coordination done</Link></h3>
                <p>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
              </div>
              <div className="service-image">
                <img src="assets/img/home-3/service/service-02.png" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-3/service/service-icon-02.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="service-box-items-3">
              <div className="service-content">
                <h3><Link to="/service-details">Full Container Load (FCL) Shipping</Link></h3>
                <p>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
              </div>
              <div className="service-image">
                <img src="assets/img/home-3/service/service-03.png" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-3/service/service-icon-03.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
