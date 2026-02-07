import { Link } from "react-router-dom";


export default function TeamHomeThree() {
  return (
    <section className="team-section-3 section-padding fix section-bg">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> T R U S T E D H A N D S <img src="assets/img/home-2/left.png" alt="img" /></h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Meet the Crew Behind the Cargo
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-box-items-3">
              <div className="team-image">
                <img src="assets/img/home-3/team/team-01.jpg" alt="img" />
                <div className="team-content">
                  <h3><Link to="/team-details">Jessica Brown</Link></h3>
                  <p>Manager</p>
                  <div className="arrow-4">
                    <img src="assets/img/arrow4.png" alt="img" />
                  </div>
                </div>
                <div className="social-profile">
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-box-items-3">
              <div className="team-image">
                <img src="assets/img/home-3/team/team-02.jpg" alt="img" />
                <div className="team-content">
                  <h3><Link to="/team-details">Jessica Brown</Link></h3>
                  <p>Manager</p>
                  <div className="arrow-4">
                    <img src="assets/img/arrow4.png" alt="img" />
                  </div>
                </div>
                <div className="social-profile">
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-box-items-3">
              <div className="team-image">
                <img src="assets/img/home-3/team/team-03.jpg" alt="img" />
                <div className="team-content">
                  <h3><Link to="/team-details">Jessica Brown</Link></h3>
                  <p>Manager</p>
                  <div className="arrow-4">
                    <img src="assets/img/arrow4.png" alt="img" />
                  </div>
                </div>
                <div className="social-profile">
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
