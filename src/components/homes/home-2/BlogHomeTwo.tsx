import { Link } from "react-router-dom";


export default function BlogHomeTwo() {
  return (
    <section className="news-section-2 section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> Air Freight News</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Fast Lane Freight News
            </h2>
          </div>
          <div className="main-button wow fadeInUp" data-wow-delay=".3s">
            <Link to="/news-details"> <span className="theme-btn"> VIEW ALL BLOG </span>
              <span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="assets/img/home-2/news/news-01.jpg" alt="img" />
              </div>
              <div className="news-content">
                <div className="news-content">
                  <ul>
                    <li>
                      Admin By
                    </li>
                    <li>
                      04 Comment
                    </li>
                  </ul>
                  <h3><Link to="/news-details">What Makes a Reliable Air Freight Partner?</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="assets/img/home-2/news/news-02.jpg" alt="img" />
              </div>
              <div className="news-content">
                <div className="news-content">
                  <ul>
                    <li>
                      Admin By
                    </li>
                    <li>
                      04 Comment
                    </li>
                  </ul>
                  <h3><Link to="/news-details">The Rise of Temperature-Controlled Air Logistics</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="assets/img/home-2/news/news-03.jpg" alt="img" />
              </div>
              <div className="news-content">
                <div className="news-content">
                  <ul>
                    <li>
                      Admin By
                    </li>
                    <li>
                      04 Comment
                    </li>
                  </ul>
                  <h3><Link to="/news-details">The Rise of Temperature-Controlled Air Logistics</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
