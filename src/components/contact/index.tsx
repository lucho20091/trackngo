 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ContactArea from "./ContactArea"; 

export default function Contact() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="CONTACT US" subtitle="CONTACT US" />
      <ContactArea />
      <FooterTwo />
    </Wrapper>
  )
}
