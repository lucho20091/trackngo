 
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import VideoPopup from "../../../modal/VideoPopup";


export default function ProjectHomeThree() {
  return (
    <section className="project-section-3 section-padding bg-cover pt-0 fix"
      style={{ backgroundImage: `url(/assets/img/home-3/project/project-bg.jpg)` }}>
      <Swiper
        loop={true}
        spaceBetween={30}
        speed={1300}
        autoplay={{
          delay: 1300,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        breakpoints={{
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
        }}
        className="swiper project-slide-3"> 
        <SwiperSlide className="swiper-slide">
          <div className="project-image-items-3">
            <img src="assets/img/home-3/project/project-01.jpg" alt="img" />
            <div className="project-content">
              <h3><Link to="/project-details">Island Construction Cargo</Link></h3>
              <p>
                Specialized delivery of building materials to remote islands with reliable, secur
              </p>
              <Link to="/project-details" className="link-btns">
                VIEW PROJECT
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="project-image-items-3">
            <img src="assets/img/home-3/project/project-02.jpg" alt="img" />
            <div className="project-content">
              <h3><Link to="/project-details">Island Construction Cargo</Link></h3>
              <p>
                Specialized delivery of building materials to remote islands with reliable, secur
              </p>
              <Link to="/project-details" className="link-btns">
                VIEW PROJECT
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="project-image-items-3">
            <img src="assets/img/home-3/project/project-03.jpg" alt="img" />
            <div className="project-content">
              <h3><Link to="/project-details">Island Construction Cargo</Link></h3>
              <p>
                Specialized delivery of building materials to remote islands with reliable, secur
              </p>
              <Link to="/project-details" className="link-btns">
                VIEW PROJECT
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="project-image-items-3">
            <img src="assets/img/home-3/project/project-04.jpg" alt="img" />
            <div className="project-content">
              <h3><Link to="/project-details">Island Construction Cargo</Link></h3>
              <p>
                Specialized delivery of building materials to remote islands with reliable, secur
              </p>
              <Link to="/project-details" className="link-btns">
                VIEW PROJECT
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="video-items wow fadeInUp">
        <VideoPopup>
          <a style={{ cursor: 'pointer' }} className="video-btn ripple video-popup">
            <i className="fas fa-play"></i>
          </a>
        </VideoPopup>
        <h3>Let’s Take Video</h3>
      </div>
    </section>
  )
}
