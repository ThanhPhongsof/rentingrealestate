import { Sidebar } from "components/sidebar";
import "../../modules/header/styles/index.scss";
import LayoutContainer from "./LayoutContainer";

const Header = () => {
  return (
    <header id="#header">
      <LayoutContainer>
        <div className="header-main">
          <a href="#!" className="header-logo">
            <img srcSet="/logo.png 2x" alt="Renting Real Estate" />
          </a>
          <Sidebar />
          <a href="#!" className="button button--primary">
            Sign up
          </a>
        </div>
      </LayoutContainer>
    </header>
  );
};

export default Header;
