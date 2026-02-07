import { Link } from "react-router-dom";


export default function NewsStandardArea() {
  return (
    <section className="news-standard-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              <div className="news-standard-items">
                <div className="news-thumb">
                  <img src="assets/img/home-1/inner/blog-standard/01.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      11 March 2025
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      0 Comments
                    </li>
                  </ul>
                  <h3>
                    <Link to="/news-details">Hazardous Cargo Regulations in Sea Freight</Link>
                  </h3>
                  <p>
                    The Bill of Lading (B/L) is one of the most important documents in ocean freight shipping. It serves as a receipt of goods, a contract of carriage, and a title of ownership all in one.
                  </p>
                  <div className="main-button mt-4 wow fadeInUp" data-wow-delay=".9s"><Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <img src="assets/img/home-1/inner/blog-standard/02.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      11 March 2025
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      0 Comments
                    </li>
                  </ul>
                  <h3>
                    <Link to="/news-details">How to Save Costs on Long-Haul Sea Freight</Link>
                  </h3>
                  <p>
                    As global trade grows, so does the need for greener shipping solutions. The ocean freight industry is embracing sustainability through innovations like low-sulfur fuels, electric and hybrid vessels,
                  </p>
                  <div className="main-button mt-4 wow fadeInUp" data-wow-delay=".9s"><Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <img src="assets/img/home-1/inner/blog-standard/03.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      11 March 2025
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      0 Comments
                    </li>
                  </ul>
                  <h3>
                    <Link to="/news-details">Future of Sea Freight Tech Innovations to Watch"</Link>
                  </h3>
                  <p>
                    The sea freight industry is undergoing a digital transformation, driven by the need for greater speed, transparency, and sustainability. Emerging technologies like AI.
                  </p>
                  <div className="main-button mt-4 wow fadeInUp" data-wow-delay=".9s"><Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
              <div className="page-nav-wrap">
                <ul>
                  <li><a className="page-numbers" href="#">01</a></li>
                  <li><a className="page-numbers" href="#">02</a></li>
                  <li><a className="page-numbers" href="#">03</a></li>
                  <li><a className="page-numbers" href="#"><i className="fa-solid fa-arrow-right-long"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="search-widget">
                  <form action="#">
                    <input type="text" placeholder="Search Blog" />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                  </form>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="widget-title">
                  <h3>Categories</h3>
                </div>
                <ul className="category-list">
                  <li><Link to="/service-details">Break Bulk Shipping</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><Link to="/service-details">Full Container Load (FCL)</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><Link to="/service-details">Project Cargo Handling</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><Link to="/service-details">Real-Time Cargo Tracking</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><Link to="/service-details">Inland Haulage & Drayage</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                </ul>
              </div>
              <div className="single-sidebar-widget">
                <div className="widget-title">
                  <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-standard/post-1.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          April 12, 2025
                        </li>
                      </ul>
                      <h6>
                        <Link to="/news-details">
                          Future of Sea Freight Tech Innovations to Watch
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-standard/post-2.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          April 12, 2025
                        </li>
                      </ul>
                      <h6>
                        <Link to="/news-details">
                          Common Mistakes to Avoid in Ocean Shippin
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-standard/post-3.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          April 12, 2025
                        </li>
                      </ul>
                      <h6>
                        <Link to="/news-details">
                          How to Save Costs on Long-Haul Sea Freight
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="widget-title">
                  <h3>tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">
                    <Link to="/news-details">GlobalShipping</Link>
                    <Link to="/news-details">ContainerShipping</Link>
                    <Link to="/news-details">GreenLogistics</Link>
                    <Link to="/news-details">PortOperations</Link>
                    <Link to="/news-details">IMO2020</Link>
                    <Link to="/news-details">ShippingRoutes</Link>
                    <Link to="/news-details">ExportImport</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
