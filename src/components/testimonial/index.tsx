 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TestimonialHomeOne from "../homes/home-1/TestimonialHomeOne"; 

export default function Testimonial() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Testimonial" subtitle="Testimonial" />
      <TestimonialHomeOne />
      <FooterTwo />
    </Wrapper>
  )
}
