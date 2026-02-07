import { Link } from "react-router-dom";


export default function TeamHomeTwo() {
  return (
    <section className="team-section-2 section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp animated">
            <img src="assets/img/home-2/left.png" alt="img" /> Freight Experts
            <img src="assets/img/home-2/left.png" alt="img" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Meet Our Air Cargo Team
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay=".3s">
            <div className="team-box-items-2">
              <div className="bg-hover bg-cover" style={{ backgroundImage: `url(/assets/img/home-2/team/01.jpg)` }}></div>
              <div className="team-image text-center">
                <img src="assets/img/home-2/team/01.jpg" alt="img" />
              </div>
              <div className="content">
                <h4><Link to="/team-details">Jessica Brown</Link></h4>
                <p>Captain</p>
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
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay=".3s">
            <div className="team-box-items-2 ">
              <div className="bg-hover bg-cover" style={{ backgroundImage: `url(/assets/img/home-2/team/02.jpg)` }}></div>
              <div className="team-image text-center">
                <img src="assets/img/home-2/team/02.jpg" alt="img" />
              </div>
              <div className="content">
                <h4><Link to="/team-details">Jessica Brown</Link></h4>
                <p>Captain</p>
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
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay=".3s"
            style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }} >
            <div className="team-box-items-2 ">
              <div className="bg-hover bg-cover" style={{ backgroundImage: `url(/assets/img/home-2/team/03.jpg)` }}></div>
              <div className="team-image text-center">
                <img src="assets/img/home-2/team/03.jpg" alt="img" />
              </div>
              <div className="content">
                <h4><Link to="/team-details">Jessica Brown</Link></h4>
                <p>Captain</p>
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
    </section>
  )
}
