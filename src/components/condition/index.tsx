 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ConditionArea from "./ConditionArea"; 


export default function Condition() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="TERMS & CONDITION" subtitle="TERMS & CONDITION" />
      <ConditionArea />
      <FooterTwo />
    </Wrapper>
  )
}
