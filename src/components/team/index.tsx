

import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TeamArea from "./TeamArea";


export default function Team() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Team" subtitle="Team" />
      <TeamArea />
      <FooterTwo />
    </Wrapper>
  )
}
