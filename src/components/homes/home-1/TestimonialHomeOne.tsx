 
import { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Testimonial data
const testimonial_data = [
  {
    id: 1,
    clientImage: "assets/img/home-1/testimonial/client-01.png",
    clientName: "Marvin McKinney",
    clientPosition: "Lead Developer",
    content: "Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta vitae enter an ultricies tempor ultrices duisentis a auctor tempor neque cubilia psum risus commodo pulvina aliquam donec arcu.",
    rating: 5
  },
  {
    id: 2,
    clientImage: "assets/img/home-1/testimonial/client-02.png",
    clientName: "Sophia Williams",
    clientPosition: "Product Manager",
    content: "Excellent service! The logistics team went above and beyond to ensure our international shipments arrived on time. Their attention to detail and proactive communication made a huge difference for our business operations.",
    rating: 5
  },
  {
    id: 3,
    clientImage: "assets/img/home-1/testimonial/client-03.png",
    clientName: "Robert Johnson",
    clientPosition: "Operations Director",
    content: "Working with this logistics company has transformed our supply chain efficiency. Their expertise in warehousing and distribution saved us 30% in operational costs while improving delivery times significantly.",
    rating: 5
  }
];

// Testimonial shapes
const testimonial_shapes = [
  "assets/img/home-1/testimonial/shape-1.png",
  "assets/img/home-1/testimonial/shape-2.png",
  "assets/img/home-1/testimonial/shape-3.png",
  "assets/img/home-1/testimonial/shape-4.png",
  "assets/img/home-1/testimonial/shape-5.png",
];

export default function TestimonialHomeOne() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i key={i} className="fa-solid fa-star-sharp"></i>
      );
    }
    return stars;
  };

  return (
    <section className="testimonial-section section-padding fix">
      {testimonial_shapes.map((item, i) => (
        <div key={`shape-${i}`} className={`shape-${i + 1}`}>
          <img src={item} alt="shape" />
        </div>
      ))}

      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img src="assets/img/home-1/title-img.png" alt="title" /> TESTIMONIAL
            <img src="assets/img/home-1/title-img-2.png" alt="title" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            What Our Clients Say
          </h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="testimonial-left-items">
                <div className="client-info-area">
                  <Swiper
                    onSwiper={(swiper) => setThumbsSwiper(swiper)}
                    spaceBetween={30}
                    speed={1000}
                    loop={true}
                    direction="vertical"
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    autoplay={{
                      delay: 1300,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".array-prev",
                      prevEl: ".array-next",
                    }}
                    modules={[Autoplay, Navigation, Thumbs]}
                    breakpoints={{
                      1199: {
                        slidesPerView: 3,
                      },
                      991: {
                        slidesPerView: 3,
                      },
                      767: {
                        slidesPerView: 2,
                        direction: "horizontal",
                      },
                      575: {
                        slidesPerView: 2,
                        direction: "horizontal",
                      },
                      400: {
                        slidesPerView: 1,
                        direction: "horizontal",
                      },
                    }}
                    className="swiper testi-top-slider"
                  >
                    {testimonial_data.map((testimonial) => (
                      <SwiperSlide
                        key={`thumb-${testimonial.id}`}
                        className="swiper-slide"
                      >
                        <div className="client-info-box mt-0">
                          <div className="client-image">
                            <img
                              src={testimonial.clientImage}
                              alt={testimonial.clientName}
                            />
                          </div>
                          <div className="client-content">
                            <h4>{testimonial.clientName}</h4>
                            <p>{testimonial.clientPosition}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="testimonial-right-items">
                <div className="icon">
                  <img
                    src="assets/img/home-1/testimonial/line-shape.png"
                    alt="line shape"
                  />
                </div>

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
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Autoplay, Navigation, Thumbs]}
                  className="swiper testimonial-content-slide"
                >
                  {testimonial_data.map((testimonial) => (
                    <SwiperSlide
                      key={`content-${testimonial.id}`}
                      className="swiper-slide"
                    >
                      <div className="testimonial-content">
                        <div className="star">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="testimonial-text">
                          {testimonial.content}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="array-button">
                    <button className="array-prev">
                      <i className="fa-solid fa-arrow-up-left"></i>
                    </button>
                    <button className="array-next">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </button>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}