import { Link } from "react-router-dom";


export default function ServiceHomeTwo() {
  return (
    <section className="service-section-2 section-padding fix section-bg">
      <div className="service-shape-1">
        <img src="assets/img/home-2/service/shape-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> Our Flight Plan <img src="assets/img/home-2/left.png" alt="img" /></h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Fast, Reliable Air Cargo Services
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="service-box-items-2">
              <div className="service-image">
                <img src="assets/img/home-2/service/service-01.jpg" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-2/service/icon-01.svg" alt="img" />
                </div>
                <div className="icon-text">
                  Service _ 01
                </div>
              </div>
              <div className="service-content">
                <h3><Link to="/service-details">Dangerous Goods Handling</Link></h3>
                <p>Efficient cargo transfer between major international hubs.</p>
                <Link to="/service-details" className="link-btns">
                  READ MORE
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="service-box-items-2">
              <div className="service-image">
                <img src="assets/img/home-2/service/service-02.jpg" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-2/service/icon-02.svg" alt="img" />
                </div>
                <div className="icon-text">
                  Service _ 02
                </div>
              </div>
              <div className="service-content">
                <h3><Link to="/service-details">Express Air Freight</Link></h3>
                <p>Priority handling for urgent, time-critical shipments.</p>
                <Link to="/service-details" className="link-btns">
                  READ MORE
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="service-box-items-2">
              <div className="service-image">
                <img src="assets/img/home-2/service/service-03.jpg" alt="img" />
                <div className="icon">
                  <img src="assets/img/home-2/service/icon-03.svg" alt="img" />
                </div>
                <div className="icon-text">
                  Service _ 03
                </div>
              </div>
              <div className="service-content">
                <h3><Link to="/service-details">Charter Air Cargo Services</Link></h3>
                <p>We are committed to providing expert training, supportive community, </p>
                <Link to="/service-details" className="link-btns">
                  READ MORE
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
