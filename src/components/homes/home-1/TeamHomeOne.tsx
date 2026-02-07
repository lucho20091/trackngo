import { Link } from "react-router-dom";


export default function TeamHomeOne() {
  return (
    <section className="team-section section-padding fix section-bg">
      <div className="team-shape-1">
        <img src="assets/img/home-1/team/team-shape-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" /> OUR TEAM MEMBERS <img src="assets/img/home-1/title-img-2.png" alt="img" /></h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Meet our Experts
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-box-items">
              <div className="team-image">
                <img src="assets/img/home-1/team/011.png" alt="img" />
                <div className="content">
                  <h4><Link to="/team-details">Andrew More</Link></h4>
                  <p>Consultant</p>
                </div>
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="team-box-items">
              <div className="team-image">
                <img src="assets/img/home-1/team/022.png" alt="img" />
                <div className="content">
                  <h4><Link to="/team-details">Sarah Albert</Link></h4>
                  <p>Logistic Head</p>
                </div>
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="team-box-items">
              <div className="team-image">
                <img src="assets/img/home-1/team/003.png" alt="img" />
                <div className="content">
                  <h4><Link to="/team-details">David cooper</Link></h4>
                  <p>CEO</p>
                </div>
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="team-box-items">
              <div className="team-image">
                <img src="assets/img/home-1/team/011.png" alt="img" />
                <div className="content">
                  <h4><Link to="/team-details">David Smith</Link></h4>
                  <p>Manger</p>
                </div>
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
