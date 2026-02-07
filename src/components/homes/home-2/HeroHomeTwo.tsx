 
import { Link } from "react-router-dom";
import VideoPopup from "../../../modal/VideoPopup";


export default function HeroHomeTwo() {
  return (
    <section className="hero-section-2 hero-2 bg-cover fix" style={{ backgroundImage: `url(/assets/img/home-2/hero/hero-bg.jpg)` }}>
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="hero-content">
            <div className="section-title mb-0">
              <h6 className="wow fadeInUp"><img src="assets/img/home-1/title-img.png" alt="img" />Fast. Reliable. Global.</h6>
              <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                AIR FREIGHT THAT KEEPS YOUR BUSINESS MOVING
              </h1>
            </div>
            <p className="hero-text wow fadeInUp" data-wow-delay=".3s">
              Join a fitness community that’s focused on results. Whether you're looking to build muscle, burn fat, or boost endurance, we’ve got the training, tools
            </p>
            <div className="hero-button">
              <div className="main-button mt-0 wow fadeInUp" data-wow-delay=".5s">
                <Link to="/about"> <span className="theme-btn"> READ MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
              </div>
              <VideoPopup>
                <a style={{ cursor: 'pointer' }} className="video-btn video-popup">
                  <span className="video-text">
                    PLAY VIDEO
                  </span>
                  <i className="fas fa-play"></i>
                </a>
              </VideoPopup>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="hero-image">
            <img src="assets/img/home-2/hero/hero-01.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
