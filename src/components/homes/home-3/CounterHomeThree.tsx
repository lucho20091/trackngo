import Count from "../../../common/count"

 
const counter_data = [
  {
    id: 1,
    number: 480,
    suffix: "K",
    title: "Deliveries Completed",
    style: "",
    delay: "",
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
    number: 100,
    suffix: "%",
    title: "Customer Satisfaction",
    style: "style-2",
    delay: ".6s",
  },
]

export default function CounterHomeThree() {
  return (
    <section className="counter-section-3 section-padding pt-0">
      <div className="container">
        <div className="row g-0">
          {counter_data.map((item, i) => (
            <div key={i} className="col-lg-3">
              <div className={`counter-item-3 ${item.style} wow fadeInUp`} data-wow-delay={item.delay}>
                <h2><span className="count"><Count number={item.number} text={item.suffix} add_style={true} /></span></h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  )
}
