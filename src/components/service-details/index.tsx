 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ServiceDetailsArea from "./ServiceDetailsArea"; 


export default function ServiceDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <FooterTwo />
    </Wrapper>
  )
}
