import { Link } from "react-router-dom";



export default function ContactHomeOne() {
  return (
    <section className="contact-section section-padding pb-0 fix bg-cover" style={{ backgroundImage: `url(/assets/img/home-1/contact/contact-bg.jpg)` }}>
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" /> WHY CHOOSE US</h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                    The Road to Smarter Logistics Starts Here
                  </h2>
                </div>
                <p className="contact-text wow fadeInUp" data-wow-delay=".4s">
                  We’re more than a freight carrier—we’re your long-term logistics partner. From the first mile to the final destination, our experienced.
                </p>
                <div className="icon-box-area">
                  <div className="icon-box wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <img src="assets/img/home-1/contact/icon-01.svg" alt="img" />
                    </div>
                    <h4>Customer Satisfaction</h4>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon">
                      <img src="assets/img/home-1/contact/icon-02.svg" alt="img" />
                    </div>
                    <h4>Inventory Management</h4>
                  </div>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".9s">
                  <Link to="/about"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box-items bg-cover" style={{ backgroundImage: `url(/assets/img/home-1/contact-bg.jpg)` }}>
                <div className="arrow-image">
                  <img src="assets/img/home-1/contact/arrow.png" alt="" />
                </div>
                <h3>Request For a Free Quote</h3>
                <form action="#" className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="form-clt ralt">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="form-clt">
                        <input type="text" placeholder="Your Number" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Select Services" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Select Volume" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <div className="form-clt">
                        <textarea name="message" id="message1" placeholder="Write a message..."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12  wow fadeInUp" data-wow-delay=".3s">
                      <div className="main-button mt-0 wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit"> <span className="theme-btn"> SUBMIT NOW</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
