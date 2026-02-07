import { Link } from "react-router-dom";


export default function BlogHomeThree() {
  return (
    <section className="news-section-3 section-padding fix pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" />Air Freight News</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Fast Lane Freight News
            </h2>
          </div>
          <div className="main-button  wow fadeInUp" data-wow-delay=".3s">
            <Link to="/news-details">
              <span className="theme-btn"> VIEW ALL BLOG </span>
              <span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-box-items-3">
              <div className="news-image">
                <img src="assets/img/home-3/news/news-01.jpg" alt="img" />
              </div>
              <div className="news-content">
                <h3><Link to="/news-details">Why Tracking Matters in Sea Freight Logistics</Link></h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-user"></i>
                    By Admin
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    02 Comment
                  </li>
                </ul>
                <div className="post-date">
                  <span>Oct 26,2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="news-box-items-3">
              <div className="news-image">
                <img src="assets/img/home-3/news/news-02.jpg" alt="img" />
              </div>
              <div className="news-content">
                <h3><Link to="/news-details">The Future of Ocean Freight Tech & Innovation</Link></h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-user"></i>
                    By Admin
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    02 Comment
                  </li>
                </ul>
                <div className="post-date">
                  <span>Oct 26,2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="news-box-items-3">
              <div className="news-image">
                <img src="assets/img/home-3/news/news-01.jpg" alt="img" />
              </div>
              <div className="news-content">
                <h3><Link to="/news-details">Customs Clearance Tips for Smooth Ocean Shipping</Link></h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-user"></i>
                    By Admin
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    02 Comment
                  </li>
                </ul>
                <div className="post-date">
                  <span>Oct 26,2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
