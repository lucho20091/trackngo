
export default function ContactHomeThree() {
  return (
    <section className="contact-section-3 section-padding fix bg-cover" style={{ backgroundImage: `url(/assets/img/home-3/contact/contact-bg.jpg)` }}>
      <div className="container">
        <div className="contact-wrapper-3">
          <div className="row g-0">
            <div className="col-xl-6">
              <div className="contact-box-items bg-cover" style={{ backgroundImage: `url(/assets/img/home-3/contact/contact-us.png)` }}>
                <div className="line-image">
                  <img src="assets/img/home-3/contact/line.png" alt="" />
                </div>
                <h3>Get Stared Now</h3>
                <form action="#" className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp animated" data-wow-delay=".3s">
                      <div className="form-clt ralt">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp animated" data-wow-delay=".5s">
                      <div className="form-clt">
                        <input type="text" placeholder="Your Number" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp animated" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Select Services" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp animated" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Select Volume" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".9s">
                      <div className="form-clt">
                        <textarea name="message" id="message1" placeholder="Write a message..."></textarea>
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
            <div className="col-xl-6">
              <div className="contact-content">
                <div className="contact-right-item-3">
                  <div className="section-title mb-0">
                    <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" /> C O N T A C T U S </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      Get in Touch with Our Freight Experts"
                    </h2>
                  </div>
                  <p className="contact-text wow fadeInUp" data-wow-delay=".3s">
                    Have a question or need a quote? Our experienced ocean freight team is here to help. Get personalized support and solutions tailored to your shipping needs—quickly and efficiently.
                  </p>
                  <div className="middle-items">
                    <div className="row">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="left-items">
                          <h4>Opening Hour</h4>
                          <ul>
                            <li>
                              <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                              </div>
                              <div className="content">
                                <p>Looking For Consultation</p>
                                <h5><a href="tel:+00479394888">+00 (47) 939 4888</a></h5>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                              </div>
                              <div className="content">
                                <p>Visit Our Location</p>
                                <h5>25 Street, New York, USA</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="right-items">
                          <h4>Opening Hour</h4>
                          <ul>
                            <li>
                              <p>Friday</p>
                              <h5>9am - 10pm</h5>
                            </li>
                            <li>
                              <p>Saturday</p>
                              <h5>9am - 10pm</h5>
                            </li>
                            <li>
                              <p>Saturday</p>
                              <h5>9am - 10pm</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-box-items-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-items">
                        <div className="icon">
                          <img src="assets/img/home-3/feature/feature-1.png" alt="about-image" />
                        </div>
                        <h4>REQUEST A QUOTE</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-items">
                        <div className="icon">
                          <img src="assets/img/management.png" alt="about-image" />
                        </div>
                        <h4>DELIVER YOU TIME</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-items">
                        <div className="icon">
                          <img src="assets/img/home-3/feature/feature-3.png" alt="about-image" />
                        </div>
                        <h4>SAFETY & RALIABIITY</h4>
                      </div>
                    </div>
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
