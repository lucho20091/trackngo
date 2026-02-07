 
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 
// swiper css
import 'swiper/css'; 
import "swiper/css/autoplay";
import "swiper/css/navigation"; 



export default function ProjectHomeOne() {
  return (
    <section className="project-section section-padding fix pt-0">
      <div className="project-wrapper">
        <Swiper
          spaceBetween={30}
          speed={1300}
          loop={true}
          autoplay={{
            delay: 1300,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          modules={[Autoplay]}
          breakpoints={{
            1199: {
              slidesPerView: 5,
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
          className="swiper project-slide">

          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-01.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-02.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-03.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-04.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-05.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/home-1/project/project-06.jpg" alt="img" />
                <div className="project-content">
                  <h3><Link to="/project-details">Precision Logistic Services</Link></h3>
                  <Link to="/project-details" className="link-btns">
                    VIEW PROJECT
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}
