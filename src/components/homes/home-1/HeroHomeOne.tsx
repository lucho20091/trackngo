import { Link } from "react-router-dom";



export default function HeroHomeOne() {
  return (
    <section className="hero-section hero-1 bg-cover fix" style={{ backgroundImage: `url(/assets/img/home-1/hero/hero-01.jpg)` }}>
      <div className="container">
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="section-title mb-0">
                <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" />WELCOME TO SHOT FIT GYM</h6>
                <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  End-to-End Land Freight You Can Count On.
                </h1>
              </div>
              <p className="hero-text wow fadeInUp" data-wow-delay=".3s">
                We provide dependable land freight services tailored to your needs local or cross-border. With real-time tracking, flexible routes, and on-time delivery.
              </p>
              <div className="main-button mt-0 wow fadeInUp" data-wow-delay=".5s">
                <Link to="/about"> <span className="theme-btn"> VIEW CLASS SCHEDULE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image">
              <img src="assets/img/home-1/hero/track-img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
