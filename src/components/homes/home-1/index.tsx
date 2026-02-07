 
import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import ContactHomeOne from "./ContactHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import ProcessHomeOne from "./ProcessHomeOne";
import ProjectHomeOne from "./ProjectHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import CounterHomeOne from "./CounterHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import BlogHomeOne from "./BlogHomeOne"; 
import Wrapper from "../../../layouts/Wrapper";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";



export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroHomeOne />
      <AboutHomeOne />
      <ServiceHomeOne />
      <ContactHomeOne />
      <BrandHomeOne />
      <ProcessHomeOne />
      <ProjectHomeOne />
      <TeamHomeOne />
      <CounterHomeOne />
      <TestimonialHomeOne />
      <BlogHomeOne />
      <FooterOne />
    </Wrapper>
  )
}
