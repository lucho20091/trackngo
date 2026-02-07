 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import NewsArea from "./NewsArea"; 


export default function News() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="OUR BLOG" subtitle="OUR BLOG" />
      <NewsArea />
      <FooterTwo />
    </Wrapper>
  )
}
