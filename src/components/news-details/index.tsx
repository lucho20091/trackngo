 
import Breacrumb from "../../common/Breacrumb";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import NewsDetailsArea from "./NewsDetailsArea"; 

export default function NewsDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="BLOG DETAILS" subtitle="BLOG DETAILS" />
      <NewsDetailsArea />
      <FooterTwo />
    </Wrapper>
  )
}
