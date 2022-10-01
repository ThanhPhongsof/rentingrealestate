import { IconBuyer, IconRent, IconSeller } from "components/icon";
import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const serviceLists = [
  {
    icon: <IconBuyer />,
    tittle: "Buyer Guides",
    text: "Nurture valuable leads into customers, and turn one time.",
  },
  {
    icon: <IconSeller />,
    tittle: "Renter Guides",
    text: "Build brand awareness on the top social media networks.",
  },
  {
    icon: <IconRent />,
    tittle: "Seller Guides",
    text: "Get professionally-written content that attracts qualified.",
  },
];

const Services = () => {
  return (
    <section className="services p-90">
      <LayoutContainer>
        <div className="services-top">
          <h3 className="heading heading--medium">
            Commercial real estate and office
          </h3>
          <p className="text">
            Work with Renting brokers who help you to get started with smart
            tools to.
          </p>
        </div>
        <div className="services-main">
          <div className="services-list">
            {serviceLists?.map((item) => (
              <div className="services-item" key={v4()}>
                <div className="services-icon">{item.icon}</div>
                <h4 className="services-heading heading heading-small">
                  {item.tittle}
                </h4>
                <p className="services-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Services;
