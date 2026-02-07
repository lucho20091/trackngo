 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ProjectArea from "./ProjectArea"; 


export default function Project() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="PROJECT GRID" subtitle="PROJECT GRID" />
      <ProjectArea />
      <FooterTwo />
    </Wrapper>
  )
}
