 
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";


export default function TestimonialHomeThree() {
  return (
    <section className="testimonial-section-3 section-padding pt-0 fix bg-cover" style={{ backgroundImage: `url(/assets/img/home-3/testi-bg.jpg)` }}>
      <div className="testimonial-shape-1">
        <img src="assets/img/home-3/testi-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <Swiper 
            loop={true}
            spaceBetween={30}
            speed={1000}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-prev",
              prevEl: ".array-next",
            }}
            modules={[Autoplay, Navigation]}
            className="swiper testimonial-content-slide">
           
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-box-item-3">
                    <div className="star wow fadeInUp">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="wow fadeInUp" data-wow-delay=".2s">Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta vitae enter an ultricies tempor ultrices duisentis a auctor tempor neque cubilia</h4>
                    <div className="client-info wow fadeInUp" data-wow-delay=".3s">
                      <div className="image">
                        <img src="assets/img/home-3/testimonial-client-img.png" alt="img" />
                      </div>
                      <h3>Marvin McKinney</h3>
                      <span>Lead Developer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-box-item-3">
                    <div className="star wow fadeInUp">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="wow fadeInUp" data-wow-delay=".2s">Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta vitae enter an ultricies tempor ultrices duisentis a auctor tempor neque cubilia</h4>
                    <div className="client-info wow fadeInUp" data-wow-delay=".3s">
                      <div className="image">
                        <img src="assets/img/home-3/testimonial-client-img.png" alt="img" />
                      </div>
                      <h3>Marvin McKinney</h3>
                      <span>Lead Developer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-box-item-3">
                    <div className="star wow fadeInUp">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="wow fadeInUp" data-wow-delay=".2s">Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta vitae enter an ultricies tempor ultrices duisentis a auctor tempor neque cubilia</h4>
                    <div className="client-info wow fadeInUp" data-wow-delay=".3s">
                      <div className="image">
                        <img src="assets/img/home-3/testimonial-client-img.png" alt="img" />
                      </div>
                      <h3>Marvin McKinney</h3>
                      <span>Lead Developer</span>
                    </div>
                  </div>
                </SwiperSlide>
       
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
