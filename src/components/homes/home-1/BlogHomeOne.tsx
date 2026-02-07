import { Link } from "react-router-dom";

export default function BlogHomeOne() {
  return (
    <section className="news-section section-padding fix section-bg">
      <div className="news-shape-1">
        <img src="assets/img/home-1/news/shape-01.png" alt="img" />
      </div>
      <div className="news-shape-2">
        <img src="assets/img/home-1/news/shape-02.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" />NEWS & TIPS</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              The Freight Dispatch Blog
            </h2>
          </div>
          <div className="main-button wow fadeInUp" data-wow-delay=".3s">
            <Link to="/news-details"> <span className="theme-btn"> VIEW ALL PROJECT </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
          </div>
        </div>
        <div className="news-top-items">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="news-image">
                <img src="assets/img/home-1/news/news-01.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="news-content">
                <ul>
                  <li>
                    Admin By
                  </li>
                  <li>
                    04 Comment
                  </li>
                </ul>
                <h3><Link to="/news-details">Temperature-Controlled Logistics Ensuring Quality in Transit</Link></h3>
                <p>Maintain product integrity with our temperature-controlled freight solutions—ideal for pharmaceuticals, perishables, and sensitive goods requiring precise climate control from pickup to final delivery.</p>
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-top-items">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="news-content style-2">
                <ul>
                  <li>
                    Admin By
                  </li>
                  <li>
                    04 Comment
                  </li>
                </ul>
                <h3><Link to="/news-details">How to Reduce Costs in Your Supply Chain with Smart Routing</Link></h3>
                <p>Smart routing leverages real-time data, traffic analysis, and AI-driven logistics planning to streamline delivery paths. By minimizing fuel consumption, avoiding delays, and improving vehicle utilization.</p>
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="news-image">
                <img src="assets/img/home-1/news/news-02.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
