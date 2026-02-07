 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import css
import "swiper/css";
import "swiper/css/autoplay"; 
import Count from "../../../common/count";


const counter_data = [
  {
    id: 1,
    count: 480,
    unit: "K",
    title: "Deliveries Completed",
    delay: ""
  },
  {
    id: 2,
    count: 223,
    unit: "+",
    title: "Global Partners",
    delay: ".2s"
  },
  {
    id: 3,
    count: 467,
    unit: "K",
    title: "Service Provided Monthly",
    delay: ".4s"
  },
  {
    id: 4,
    count: 98,
    unit: "%",
    title: "On-Time Delivery Rate",
    delay: ".6s"
  }
];

const brand_img = [
  "assets/img/home-1/counter/brand-01.png",
  "assets/img/home-1/counter/brand-02.png",
  "assets/img/home-1/counter/brand-03.png",
  "assets/img/home-1/counter/brand-04.png",
  "assets/img/home-1/counter/brand-05.png",
  "assets/img/home-1/counter/brand-06.png",
  "assets/img/home-1/counter/brand-07.png",
  "assets/img/home-1/counter/brand-08.png",
  // repeat img
  "assets/img/home-1/counter/brand-01.png",
  "assets/img/home-1/counter/brand-02.png",
  "assets/img/home-1/counter/brand-03.png",
  "assets/img/home-1/counter/brand-04.png",
  "assets/img/home-1/counter/brand-05.png",
  "assets/img/home-1/counter/brand-06.png",
  "assets/img/home-1/counter/brand-07.png",
  "assets/img/home-1/counter/brand-08.png",
]

export default function CounterHomeOne() {
  return (
    <section className="counter-section section-padding fix bg-cover pt-0" style={{ backgroundImage: `url(/assets/img/home-1/counter/counter-bg.jpg)` }}>
      <div className="container">
        <div className="row g-0">
          {counter_data.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
              <div className="counter-item wow fadeInUp" data-wow-delay={item.delay}>
                <h2><span className="count"> <Count number={item.count} text={item.unit} add_style={true} /> </span></h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="brand-section section-padding pb-0">
        <Swiper
          slidesPerView={6}
          spaceBetween={40}
          freeMode={true}
          centeredSlides={true}
          loop={true}
          speed={2500}
          allowTouchMove={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1199: {
              slidesPerView: 6,
            },
            991: {
              slidesPerView: 5,
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
          className="swiper brand-slide">
          {brand_img.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="brand-image text-center">
                <img src={item} alt="img" />
              </div>
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
    </section>
  )
}
