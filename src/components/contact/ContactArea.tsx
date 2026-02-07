

export default function ContactArea() {
  return (
    <>
      <div className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper-inner">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="contact-items">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <p>
                      House #5, Street Number #98, brasilia-	70000-000, Brazil.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-items">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <p>
                      support@diagno.com
                      contact@diagno.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-items text-center">
                  <div className="icon text-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="content text-center">
                    <p>
                      +380961381876 <br />
                      +380961381877
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section section-padding fix pt-0">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="map-items">
                <div className="googpemap">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: '0' }} allowFullScreen={true} loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box-items-2">
                <h3>Get In Touch</h3>
                <form action="#" className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="form-clt ralt">
                        <input type="text" placeholder="Enter Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="form-clt">
                        <input type="text" placeholder="Enter Your Number" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Select Services" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <div className="form-clt">
                        <textarea name="message" id="message1" placeholder="Enter Your Messanger"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                      <button type="submit">SEND MESSAGE<i className="fa-regular fa-arrow-up-right"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
