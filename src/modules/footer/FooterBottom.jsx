const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <p className="footer-slogan text">
        All rights reserved by © Besnik creative 2021
      </p>
      <div className="footer-social">
        <a href="#!">
          <img
            srcSet="/facebook.png 2x"
            alt="facebook"
            className="footer-social-logo"
          />
        </a>
        <a href="#!">
          <img
            srcSet="/instagram.png 2x"
            alt="instagram"
            className="footer-social-logo"
          />
        </a>
        <a href="#!">
          <img
            srcSet="/twitter.png 2x"
            alt="twitter"
            className="footer-social-logo"
          />
        </a>
        <a href="#!">
          <img srcSet="/linkedin.png 2x" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
