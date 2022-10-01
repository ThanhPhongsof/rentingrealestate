import LayoutContainer from "./LayoutContainer";
import "../../modules/footer/styles/index.scss";
import { FooterBottom, FooterTop } from "modules/footer";

const Footer = () => {
  return (
    <footer id="#footer" className="footer">
      <LayoutContainer>
      <div className="footer-container">
        <FooterTop />
        <FooterBottom />
      </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
