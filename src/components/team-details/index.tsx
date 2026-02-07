 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TeamDetailsArea from "./TeamDetailsArea"; 
export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="TEAM DETAILS" subtitle="TEAM DETAILS" />
      <TeamDetailsArea />
      <FooterTwo />
    </Wrapper>
  )
}
