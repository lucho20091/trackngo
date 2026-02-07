 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import NewsStandardArea from "./NewsStandardArea"; 


export default function NewsStandard() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="BLOG STANDARD" subtitle="BLOG STANDARD" />
      <NewsStandardArea />
      <FooterTwo />
    </Wrapper>
  )
}
