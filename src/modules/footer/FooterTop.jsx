import { v4 } from "uuid";

const footerListColumn = [
  {
    title: "Company",
    links: [
      "Agent vs. Besnik",
      "Find an Appraiser",
      "Commercial Services",
      "NAR Global Alliances",
      "Blog",
    ],
  },
  {
    title: "Service",
    links: ["Free Email Alerts", "Lost Access", "Cancel Service", "Site Map"],
  },
  {
    title: "Resources",
    links: [
      "Account Management",
      "Improve Your Credit",
      "Executive Team",
      "Space Calculator",
    ],
  },
];

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-column">
        <div className="footer-logo">
          <a href="#!" className="header-logo">
            <img srcSet="/logo.png 2x" alt="Renting Real Estate" />
          </a>
        </div>
        <p className="footer-text text">
          With over 1 million homes for sale available on the website.
        </p>
      </div>
      {footerListColumn?.map((item) => (
        <div className="footer-column" key={v4()}>
          <h5 className="footer-heading heading">{item.title}</h5>
          {item.links?.map(link => (
          <a href="#!" key={v4()} className="footer-link">{link}</a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
