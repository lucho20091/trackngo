 
import { Link } from "react-router-dom";
import team_data from "../../data/team-data";


export default function TeamArea() {
  return (
    <section className="team-section section-padding">
      <div className="container">
        <div className="team-wrapper">
          <div className="row g-4">
            {team_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-6 col-md-6 mt-0 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-box-items">
                  <div className="team-image">
                    <img src={item.image} alt="img" />
                    <div className="content">
                      <h4><Link to="/team-details">{item.name}</Link></h4>
                      <p>{item.position}</p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
