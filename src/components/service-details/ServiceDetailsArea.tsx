import { Link } from "react-router-dom";


export default function ServiceDetailsArea() {
  return (
    <section className="service-details section-padding">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="details-image">
                <img src="assets/img/home-1/service/service-details.png" alt="" />
              </div>
              <div className="details-content">
                <h3 className="mt-4">Secure Your Cargo with Confidence</h3>
                <p> Ocean freight comes with natural risks—from unpredictable weather to port delays and handling incidents. Our Marine Insurance Coordination service ensures your cargo is protected throughout its journey. We partner with trusted global insurers to provide tailored coverage that matches your shipping needs, cargo value, and destination.</p>
                <div className="highlight-box">
                  <p>Our team of UI/UX experts conducts a thorough evaluation o the submitted element, analyzing its usability, functionality</p>
                </div>
                <div className="details-list-item">
                  <h3>Service Highlights:</h3>
                  <ul>
                    <li><span><i className="fa-solid fa-arrow-right"></i>All-Risk Cargo Insurance</span>Full protection against loss, damage, theft, or natural events during transit.</li>
                    <li><span><i className="fa-solid fa-arrow-right"></i>Custom Coverage Plans</span>Insurance tailored to the value, type, and sensitivity of your cargo.</li>
                    <li><span><i className="fa-solid fa-arrow-right"></i>Efficient Claims Handling</span>We support you through the claims process with proper documentation and timely follow-ups.</li>
                    <li><span><i className="fa-solid fa-arrow-right"></i>Regulatory Compliance</span>Guidance to ensure your coverage meets all international shipping standards.</li>
                    <li><span><i className="fa-solid fa-arrow-right"></i>Flexible Insurance Options</span>Available for single shipments or ongoing contracts with scalable premiums.</li>
                  </ul>
                  <p>With programs built for all fitness levels, from beginner to athlete, our Fitness & Cardio Strength services empower you to get stronger, feel better, and move with confidence.</p>
                </div>
                <div className="feature-box">
                  <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="feature-image">
                        <img src="assets/img/home-1/service/feature.png" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="feature-content">
                        <h3>Key Features:</h3>
                        <div className="feature-list">
                          <ul>
                            <li><i className="fa-solid fa-arrow-right"></i>Full cargo value protection</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Coverage for FCL, LCL, and specialized cargo</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Claims support and documentation assistance</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Risk assessment based on cargo type and route</li>
                            <li><i className="fa-solid fa-arrow-right"></i>Optional add-ons natural disaster, war risk, </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>With our Marine Insurance Coordination, your cargo is backed by more than just expertise—it's protected by precision, planning, and global insurance partners.</p>
                <div className="faq-content">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".5s"
                        style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                        <h5 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                            What does “All-Risk” insurance cover?
                          </button>
                        </h5>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            We assist you with documentation, reporting, and communication with the insurer to streamline the claims process and ensure a smooth resolution.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".3s"
                        style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <h5 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="faq2">
                            How do I file a claim if something goes wrong?
                          </button>
                        </h5>
                        <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            We assist you with documentation, reporting, and communication with the insurer to streamline the claims process and ensure a smooth resolution.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".7s"
                        style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                        <h5 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            Does the insurance cover piracy or war risk?
                          </button>
                        </h5>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            We assist you with documentation, reporting, and communication with the insurer to streamline the claims process and ensure a smooth resolution.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".8s"
                        style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                        <h5 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            How do I file a claim if something goes wrong?
                          </button>
                        </h5>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            We assist you with documentation, reporting, and communication with the insurer to streamline the claims process and ensure a smooth resolution.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-sideber sticky-style">
                <div className="single-sideber-widget">
                  <div className="widget-title">
                    <h3>All Categories</h3>
                  </div>
                  <ul className="category-list">
                    <li><Link to="/service-details">Break Bulk Shipping</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                    <li><Link to="/service-details">Full Container Load (FCL)</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                    <li><Link to="/service-details">Project Cargo Handling</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                    <li><Link to="/service-details">Real-Time Cargo Tracking</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                    <li><Link to="/service-details">Inland Haulage & Drayage</Link><span><i className="fa-solid fa-arrow-up-right"></i></span></li>
                  </ul>
                </div>
                <div className="single-sideber-widget">
                  <div className="widget-title">
                    <h3>Contact With Us</h3>
                  </div>
                  <div className="search-widget">
                    <form action="#" className="contact-form-items">
                      <div className="row g-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="form-clt ralt">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="form-clt">
                            <input type="text" placeholder="Your Eamil" />
                          </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="form-clt">
                            <input type="text" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="form-clt">
                            <input type="text" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                          <div className="form-clt">
                            <textarea name="message" id="message1" placeholder="Write a message..."></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                          <button type="submit">SEND MESSAGE<i className="fa-regular fa-arrow-up-right"></i></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="service-details-contact-bg text-center bg-cover"
                  style={{ backgroundImage: `url(/assets/img/home-1/inner/service-details/Contact-us.jpg)` }}>
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <p> Call us,Anytime</p>
                  <h3><a href="tel:+0094382229540 ">+009 (438) 222 9540  </a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
