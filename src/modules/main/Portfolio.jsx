import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const portfolioList = [
  {
    img: "/portfolio-img-03.png 2x",
    title: "Downtown",
    text: "Atlanta, GA",
  },
  { img: "/portfolio-img-02.png 2x", title: "Rosedale", text: "Austin, TX" },
  { img: "/portfolio-img-03.png 2x", title: "Longfellow", text: "Oakland, CA" },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <LayoutContainer>
        <h3 className="portfolio-title heading heading--medium">
          Take the guesswork out of finding and scheduling
        </h3>
        <p className="portfolio-text text">
          Work with the highest quality service providers carefully evaluated,
          selected, and monitored by Besnik.
        </p>
        <div className="portfolio-list">
          {portfolioList?.map((item) => (
            <div
              className="portfolio-item"
              key={v4()}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <img srcSet={item.img} alt="" className="portfolio-item-image" />
              <div className="portfolio-item-content">
                <h4 className="h4 portfolio-item-title heading heading--small">
                  {item.title}
                </h4>
                <p className="portfolio-item-text text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-group">
          <a href="#!" className="portfolio-button button button--primary">
            See more
          </a>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Portfolio;
