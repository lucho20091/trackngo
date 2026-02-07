 
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function TestimonialHomeTwo() {
  return (
    <section className="testimonial-section-2 section-padding fix section-bg">
      <div className="container">
        <div className="testimonial-wrapper-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-left-items">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp"><img src="assets/img/home-2/left.png" alt="img" /> Freight Experts </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Meet Our Air Cargo Team
                  </h2>
                  <Swiper
                    spaceBetween={30}
                    speed={1000}
                    loop={true}
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
                      <div className="testimonial-content-box-2">
                        <div className="star wow fadeInUp" data-wow-delay=".3s">
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                        </div>
                        <h4 className="wow fadeInUp" data-wow-delay=".5s">
                          Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta
                        </h4>
                        <div className="client-info wow fadeInUp" data-wow-delay=".7s">
                          <h3>Marvin McKinney</h3>
                          <p>Lead Developer</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-content-box-2">
                        <div className="star wow fadeInUp" data-wow-delay=".3s">
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                        </div>
                        <h4 className="wow fadeInUp" data-wow-delay=".5s">
                          Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta
                        </h4>
                        <div className="client-info wow fadeInUp" data-wow-delay=".7s">
                          <h3>Marvin McKinney</h3>
                          <p>Lead Developer</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-content-box-2">
                        <div className="star wow fadeInUp" data-wow-delay=".3s">
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                          <i className="fa-solid fa-star-sharp"></i>
                        </div>
                        <h4 className="wow fadeInUp" data-wow-delay=".5s">
                          Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta
                        </h4>
                        <div className="client-info wow fadeInUp" data-wow-delay=".7s">
                          <h3>Marvin McKinney</h3>
                          <p>Lead Developer</p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <div className="array-button">
                      <button className="array-prev"><i className="fa-solid fa-arrow-up-left"></i></button>
                      <button className="array-next"><i className="fa-solid fa-arrow-up-right"></i></button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="testimonial-image">
                <img src="assets/img/home-2/tastimonial/testimonial-01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
