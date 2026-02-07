import { Link } from "react-router-dom";


export default function NewsDetailsArea() {
  return (
    <section className="news-standard-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              <div className="news-standard-items">
                <div className="news-thumb">
                  <img src="assets/img/home-1/inner/blog-details/post-4.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul>
                    <li className="style-2">
                      <i className="far fa-envelope"></i>
                      By Admin
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      04 Min Read
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      0 Comments
                    </li>
                  </ul>
                  <h3>
                    <Link to="/news-details">How the IMO 2020 Regulation Changed Sea Freight</Link>
                  </h3>
                  <p>
                    The Bill of Lading (B/L) is one of the most important documents in ocean freight shipping. It serves as a receipt of goods, a contract of carriage, and a title of ownership all in one.
                  </p>
                  <div className="main-button mt-4 wow fadeInUp" data-wow-delay=".9s"><Link to="/news-details"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
              <div className="highlight-box">
                <p>Our team of UI/UX experts conducts a thorough evaluation o the submitted element, analyzing its usability, functionality</p>
              </div>
              <div className="introduced-box">
                <h3>Why Was IMO 2020 Introduced?</h3>
                <p>Ocean freight is essential to global trade, but traditional marine fuels produced high sulfur oxide emissions, contributing to air pollution, acid rain, and respiratory issues. IMO 2020 aimed to:</p>
                <div className="list-area">
                  <ul>
                    <li>
                      <i className="fa-solid fa-arrow-right"></i><span className="color-2">Improve air quality in port cities and coastal areas</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-arrow-right"></i><span className="color-2">Reduce maritime environmental impact</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-arrow-right"></i> <span className="color-2">Support the United Nations Sustainable Development Goals</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="operation-box">
                <h3>Key Changes in Sea Freight Operations</h3>
                <div className="list-area">
                  <h4>01. Low-Sulfur Fuel Oil (LSFO) Adoption</h4>
                  <p>Most carriers switched to compliant LSFO, which costs more but meets the regulation.</p>
                  <h4>02. Scrubber Installation</h4>
                  <p>Some ships installed exhaust gas cleaning systems (scrubbers) to continue using high-sulfur fuel oil legally.</p>
                  <h4>03. Increased Freight Costs</h4>
                  <p>The higher price of LSFO led to fuel surcharges passed on to shippers.</p>
                  <h4>01. Low-Sulfur Fuel Oil (LSFO) Adoption</h4>
                  <p>Carriers had to overhaul fuel procurement, storage, and handling practices.</p>
                </div>
              </div>
              <div className="feature-box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-items">
                      <div className="feature-img">
                        <img src="assets/img/home-1/inner/blog-details/img-1.jpg" alt="" />
                      </div>
                      <div className="content">
                        <h3>Environmental Benefits</h3>
                        <ul>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Estimated 77% reduction in sulfur oxide ships
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Better air quality near major trade ports
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Increased industry focus on green technology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-items">
                      <div className="feature-img">
                        <img src="assets/img/home-1/inner/blog-details/img-2.jpg" alt="" />
                      </div>
                      <div className="content">
                        <h3>Challenges and Industry Response</h3>
                        <ul>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Fuel availability issues in some regions
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Initial compliance uncertainty for smaller operators
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right"></i>
                            Encouraged investment in alternative fuels
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="final-thoughts">
                <h3 className="mb-3">Final Thoughts</h3>
                <p>The IMO 2020 regulation reshaped how carriers operate, pushing the industry toward cleaner, more efficient shipping. While costs increased, the long-term environmental and health benefits make this a vital step in the evolution of global ocean freight.</p>
              </div>
              <div className="row tag-share-wrap mt-4 mb-5">
                <div className="col-lg-8 col-12">
                  <div className="tagcloud">
                    <span>Tags:</span>
                    <Link to="/news-details">HotelBooking</Link>
                    <Link to="/news-details">CityBreak</Link>
                    <Link to="/news-details">HotelOffer</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                  <div className="social-share">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <div className="comments-heading">
                  <h3>03 Comments</h3>
                </div>
                <div className="blog-single-comment d-flex gap-4 pt-4">
                  <div className="image">
                    <img src="assets/img/home-1/inner/blog-details/comment-1.png" alt="img" />
                  </div>
                  <div className="content">
                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                      <div className="con">
                        <span>February 10, 2025</span>
                        <h5><Link to="/news-details">Frank Flores</Link></h5>
                      </div>
                      <Link to="/news-details" className="reply">Reply</Link>
                    </div>
                    <p className="mt-30 mb-4">
                      Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                    </p>
                  </div>
                </div>
                <div className="blog-single-comment style-2 d-flex gap-4 pt-2 pb-2">
                  <div className="image">
                    <img src="assets/img/home-1/inner/blog-details/comment-2.png" alt="img" />
                  </div>
                  <div className="content">
                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                      <div className="con">
                        <span>February 10, 2025</span>
                        <h5><Link to="/news-details">Charlie Tushar</Link></h5>
                      </div>
                      <Link to="/news-details" className="reply">Reply</Link>
                    </div>
                    <p className="mt-30 mb-4">
                      Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                    </p>
                  </div>
                </div>
                <div className="blog-single-comment d-flex gap-4 pb-2">
                  <div className="image">
                    <img src="assets/img/home-1/inner/blog-details/comment-3.png" alt="img" />
                  </div>
                  <div className="content">
                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                      <div className="con">
                        <span>February 10, 2025 </span>
                        <h5><Link to="/news-details">Fatma Sariqul</Link></h5>

                      </div>
                      <Link to="/news-details" className="reply">Reply</Link>
                    </div>
                    <p className="mt-30 mb-4">
                      Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment-form-wrap pt-5">
                <h3>Leave a comments</h3>
                <form action="#" id="contact-form" method="POST">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input type="text" name="email" id="email2" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea name="message" id="message" placeholder="Write Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6  wow fadeInUp" data-wow-delay=".3s">
                      <div className="main-button mt-0 wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit"> <span className="theme-btn"> SUBMIT NOW</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></button>
                      </div>
                    </div>
                  </div>
                </form>
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
                  <li><a href="service-details.html">Regulations & Compliance</a><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><a href="service-details.html">Full Container Load (FCL)</a><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><a href="service-details.html">Sustainability & Green Shipping</a><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><a href="service-details.html">Cost & Pricing Insights</a><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  <li><a href="service-details.html">Port & Terminal Operations</a><span><i className="fa-solid fa-arrow-up-right"></i></span>
                  </li>
                </ul>
              </div>
              <div className="single-sidebar-widget">
                <div className="widget-title">
                  <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-details/post-5.jpg" alt="img" />
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
                          VIP Services That Define Elite Hospitality
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-details/post-5.jpg" alt="img" />
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
                          VIP Services That Define Elite Hospitality
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/home-1/inner/blog-details/post-5.jpg" alt="img" />
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
                          VIP Services That Define Elite Hospitality
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
