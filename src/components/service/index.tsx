
import ServiceArea from "./ServiceArea";
import ContactHomeThree from "../homes/home-3/ContactHomeThree";
import TestimonialHomeOne from "../homes/home-1/TestimonialHomeOne";
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";

export default function Service() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Service" subtitle="Service" />
      <ServiceArea />
      <ContactHomeThree />
      <TestimonialHomeOne />
      <FooterTwo />
    </Wrapper>
  )
}
