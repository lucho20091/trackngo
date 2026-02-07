 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// swiper css
import 'swiper/css'; 
import "swiper/css/autoplay";

const brand_data = [
  { title: "Speed", style: "style-2" },
  { title: "Precision", style: "" },
  { title: "Excellence", style: "style-2" },
  { title: "Speed", style: "" },
  { title: "Precision", style: "style-2" },
  { title: "Excellence", style: "" },
  { title: "Speed", style: "style-2" },
  { title: "Precision", style: "" },
  { title: "Excellence", style: "style-2" },
  { title: "Speed", style: "" },
];




export default function BrandHomeOne() {
  return (
    <div className="marque-section">
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
        className="swiper marque-slider"> 
        {brand_data.map((item, i) => (
          <SwiperSlide key={i} className="swiper-slide brand-slide-element">
            <div className={`marque-items ${item.style}`}>
              <img src="assets/img/home-1/track.png" alt="img" />
              <h3>Speed</h3>
            </div>
          </SwiperSlide>
        ))}      
      </Swiper>
    </div>
  )
}
