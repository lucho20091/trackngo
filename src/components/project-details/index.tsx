 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ProjectDetailsArea from "./ProjectDetailsArea"; 


export default function ProjectDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="PROJECT DETAILS" subtitle="PROJECT DETAILS" />
      <ProjectDetailsArea />
      <FooterTwo />
    </Wrapper>
  )
}
