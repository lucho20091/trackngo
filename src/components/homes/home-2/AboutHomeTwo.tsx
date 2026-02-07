 
import { useState } from "react";

export default function AboutHomeTwo() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("vision");

  return (
    <section className="about-section-2 section-padding fix">
      <div className="about-shape-1">
        <img src="assets/img/home-2/about/shape-01.png" alt="img" />
      </div>
      <div className="about-shape-2">
        <img src="assets/img/home-2/about/shape-02.png" alt="img" />
      </div>
      <div className="about-shape-3">
        <img src="assets/img/home-2/about/shape-03.png" alt="img" />
      </div>

      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-iamge">
                <img src="assets/img/home-2/about/about-01.png" alt="img" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp">
                    <img src="assets/img/home-2/left.png" alt="img" /> About Us
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Elevating Air Cargo, One Shipment at a Time
                  </h2>
                </div>

                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                  With every takeoff, we bring reliability, speed, and precision
                  to your air freight needs.
                </p>

                <div className="client-info-area">
                  <div className="client-info wow fadeInUp" data-wow-delay=".5s">
                    <div className="client-img">
                      <img src="assets/img/home-2/about/client-img.png" alt="img" />
                    </div>
                    <div className="client-content">
                      <h4>
                        Tushar Danile
                      </h4>
                      <p>CEO Company</p>
                    </div>
                  </div>
                  <img src="assets/img/home-2/sign.png" alt="img" />
                </div>

                <ul className="nav">
                  <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                    <button
                      className={`nav-link ${activeTab === "mission" ? "active" : ""
                        }`}
                      onClick={() => setActiveTab("mission")}
                    >
                      Our Mission
                    </button>
                  </li>

                  <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                    <button
                      className={`nav-link ${activeTab === "vision" ? "active" : ""
                        }`}
                      onClick={() => setActiveTab("vision")}
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {activeTab === "mission" && (
                    <div className="tab-pane fade show active">
                      <div className="about-tab-box">
                        <p>
                          We are committed to providing expert training, supportive community, and a motivating environment where people of all fitness levels can thrive. We believe that fitness is not just a goal — it’s a lifelong journey of growth,
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "vision" && (
                    <div className="tab-pane fade show active">
                      <div className="about-tab-box">
                        <p>
                          Motivating environment where people of We are committed to providing expert training, supportive community, and a  all fitness levels can thrive. We believe that fitness is not just a goal — it’s a lifelong journey of growth,
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
