import Count from "../../../common/count";
import VideoPopup from "../../../modal/VideoPopup";

 

const counter_data = [
  {
    id: 1,
    number: 480,
    suffix: "K",
    title: "Deliveries Completed",
    style: "",
    delay: ".0s",
  },
  {
    id: 2,
    number: 223,
    suffix: "+",
    title: "Global Partners",
    style: "style-2",
    delay: ".2s",
  },
  {
    id: 3,
    number: 467,
    suffix: "K",
    title: "Service Provided Monthly",
    style: "",
    delay: ".4s",
  },
  {
    id: 4,
    number: 98,
    suffix: "%",
    title: "On-Time Delivery Rate",
    style: "style-2",
    delay: ".6s",
  },
];



export default function CounterHomeTwo() {
  return (
    <section className="counter-section-2 section-padding bg-cover" style={{ backgroundImage: `url(/assets/img/home-2/counter-bg.jpg)` }}>
      <div className="container">
        <div className="counter-box">
          <div className="row g-4">
            {counter_data.map((item, i) => (

              <div key={i} className="col-lg-3">
                <div className={`counter-items ${item.style} wow fadeInUp`} data-wow-delay={item.delay}>
                  <h2><span className="count"><Count number={item.number} text={item.suffix} add_style={true} /></span></h2>
                  <p>{item.title}</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
        <div className="video-items wow fadeInUp" data-wow-delay=".3s">
          <VideoPopup>
            <a style={{cursor: 'pointer'}} className="video-btn ripple video-popup">
              <i className="fas fa-play"></i>
            </a>
          </VideoPopup>
          <h3>Let’s Take Video</h3>
        </div>
      </div>
    </section>
  )
}
