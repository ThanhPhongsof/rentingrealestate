import { IconCreditCard, IconPencil, IconSpeeddomito } from "components/icon";
import { v4 } from "uuid";

const toolsContentDetails = [
  {
    icon: <IconPencil />,
    title: "Trusted partners",
    text: "With 8 detectors to pick from various",
  },
  {
    icon: <IconCreditCard />,
    title: "Goodbye printouts",
    text: "You can set Safewatch to detect",
  },
  {
    icon: <IconSpeeddomito />,
    title: "Available listing",
    text: "You can have peace of mind",
  },
];

const Tools = () => {
  return (
    <section className="tools p-90">
      <div className="main-container">
        <div className="tools-image main-container-image">
          <img srcSet="/tools-img.png 2x" alt="Get started with smart tools" />
        </div>
        <div className="tools-content">
          <h3 className="tools-heading heading heading--medium">
            Get started with smart tools
          </h3>
          <p className="tools-text text">
            Comprehensive listings enable you to see what's on the market.
          </p>
          <ul className="tools-detail-list">
            {toolsContentDetails?.map((item) => (
              <li key={v4()} className="tools-detail-item">
                <div className="tools-detail-icon">{item.icon}</div>
                <div className="tools-detail-content">
                  <h4 className="tools-detail-title heading heading--small">
                    {item.title}
                  </h4>
                  <p className="tools-detail-text text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
