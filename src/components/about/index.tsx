 
import AboutHomeThree from "../homes/home-3/AboutHomeThree";
import ChooseHomeTwo from "../homes/home-2/ChooseHomeTwo";
import TestimonialHomeOne from "../homes/home-1/TestimonialHomeOne";
import ContactHomeThree from "../homes/home-3/ContactHomeThree";
import TeamHomeTwo from "../homes/home-2/TeamHomeTwo"; 
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";

export default function About() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="ABOUT US" subtitle="ABOUT US" />
      <AboutHomeThree />
      <ChooseHomeTwo />
      <TestimonialHomeOne />
      <ContactHomeThree />
      <TeamHomeTwo />
      <FooterTwo />
    </Wrapper>
  )
}
