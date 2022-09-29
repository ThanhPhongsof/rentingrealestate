import { v4 } from "uuid";

const featureList = [
  {
    img: "/feature-img-01.png 2x",
    title: "Discover a place you'll love to live",
    text: "Take a deep dive and browse original neighborhood photos, drone footage.",
    floatRight: false,
    details: [],
  },
  {
    img: "/feature-img-02.png 2x",
    title: "Access to tons of available listings",
    text: "Comprehensive listings enable you to see what's on the market. Our brokers are on standby to answer any questions.",
    floatRight: true,
    details: [],
  },
  {
    img: "/feature-img-03.png 2x",
    title: "Discover a place you'll love to live",
    text: "Take a deep dive and browse origin neighborhood photos.",
    floatRight: false,
    details: ["100 analytics campaings", "7500 Keywords"],
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-list">
        {featureList?.map((item) => (
          <div
            className={`features-item ${item.floatRight ? "right" : ""}`}
            key={v4()}
          >
            <div className="features-image">
              <img srcSet={item.img} alt={item.title} />
            </div>
            <div className="features-content">
              <h4 className="features-title heading heading--medium">
                {item.title}
              </h4>
              <p className="features-text text">{item.text}</p>
              {item.details.length > 0 && (
                <ul className="features-detail-list">
                  {item.details?.map((info) => (
                    <li className="features-detail-item text" key={v4()}>
                      <span>
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.1"
                            cx={14}
                            cy={14}
                            r={14}
                            fill="#3C50E0"
                          />
                          <path
                            d="M19 10.5L11.5 18L8.5 15"
                            stroke="#3C50E0"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a href="#!" className="features-button button button--primary">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
