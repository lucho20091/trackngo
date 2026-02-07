import Count from "../../../common/count";

 

export default function ChooseHomeTwo() {
  return (
    <section className="choose-us-section-2 section-padding fix bg-cover" style={{ backgroundImage: `url(/assets/img/home-2/choose/choose-us-bg.jpg)` }}>
      <div className="container">
        <div className="choose-wrapper-2">
          <div className="row">
            <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="choose-image">
                <img src="assets/img/home-2/choose/choose-01.png" alt="img" />
                <div className="choose-counter-box">
                  <div className="image">
                    <img src="assets/img/home-2/choose/choose-02.png" alt="img" />
                  </div>
                  <div className="choose-counter-items">
                    <h2><span className="count"><Count number={40} text="+Years" /> </span></h2>
                    <p>Working Exprience</p>
                  </div>
                </div>
                <div className="arrow-shape">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="choose-content">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> Why Choose Us</h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                    Air Freight Backed by Experience
                  </h2>
                </div>
                <p className="choose-text wow fadeInUp" data-wow-delay=".3s">
                  With decades of industry expertise, we deliver precise, secure, and timely air freight solutions—trusted by businesses worldwide.
                </p>
                <div className="icon-items-area">
                  <div className="icon-items mt-0 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <img src="assets/img/home-2/choose/choose-icon-1.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h3>Express Air Transport</h3>
                      <p>Priority air freight service ensuring your time-sensitive shipments arrive fast, safely</p>
                    </div>
                  </div>
                  <div className="icon-items active wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="assets/img/home-2/choose/choose-icon-2.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h3>Maximum Cargo Flexibility</h3>
                      <p>From small parcels to oversized loads, we offer scalable air freight solutions that adapt.</p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="assets/img/home-2/choose/choose-icon-3.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h3>Personalized Shipping Solutions</h3>
                      <p>Tailored air freight services designed to meet your unique cargo needs—delivering flexibility</p>
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
