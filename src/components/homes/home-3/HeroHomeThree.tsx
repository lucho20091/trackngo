 
import { Link } from "react-router-dom";
import VideoPopup from "../../../modal/VideoPopup";


export default function HeroHomeThree() {
  return (
    <section className="hero-section hero-3 bg-cover fix" style={{backgroundImage: `url(/assets/img/home-3/hero/hero-bg.png)`}}>
      <div className="row align-items-center ">
        <div className="col-lg-5">
          <div className="hero-content">
            <div className="section-title mb-0">
              <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" />L O G I S T I C S B Y O C E A N</h6>
              <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                POWERING GLOBAL TRADE WITH SMART OCEAN FREIGHT
              </h1>
            </div>
            <p className="hero-text wow fadeInUp" data-wow-delay=".3s">
              We deliver efficient, reliable ocean freight solutions that connect continents and streamline your supply chain—backed by technology, expertise, and a commitment to moving your business forward.
            </p>
            <div className="hero-button wow fadeInUp" data-wow-delay=".5s">
              <div className="main-button mt-0">
                <Link to="/about"> <span className="theme-btn"> ABOUT COMPANY </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
              </div>
              <VideoPopup>
                <a style={{cursor: 'pointer'}} className="video-btn video-popup">
                  <span className="video-text">
                    PLAY VIDEO
                  </span>
                  <i className="fas fa-play"></i>
                </a>
              </VideoPopup>
            </div>
          </div>
        </div>
        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
          <div className="hero-image">
            <img src="assets/img/home-3/hero/hero-01.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
