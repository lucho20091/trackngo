 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import PrivacyArea from "./PrivacyArea"; 

export default function Privacy() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="PRIVACY POLICY" subtitle="PRIVACY POLICY" />
      <PrivacyArea />      
      <FooterTwo />
    </Wrapper>
  )
}
