 
import { Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";



export default function NotFound() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="404" subtitle="404" />
      <section className="error-section fix section-padding">
        <div className="container">
          <div className="error-items">
            <div className="thumb wow fadeInUp" data-wow-delay=".2s">
              <img src="assets/img/404-img.png" alt="img" />
            </div>
            <div className="content">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Opps ! Page not found.</h2>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Sorry, we couldn't find the page you are looking for !
              </p>
              <div className="main-button wow fadeInUp" data-wow-delay=".6s">
                <Link to="/"> <span className="theme-btn"> BACK TO HOME </span>
                  <span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Wrapper>
  )
}
