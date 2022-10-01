import { IconStar } from "components/icon";
import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const testimonialList = [
  {
    img: "/testimonial-img-01.png 2x",
    name: "Taras Migulko",
    job: "Businessman",
    quote:
      "Coldwell Banker affiliated agents know the value of home, the place we long for at the",
    stars: 5,
  },
  {
    img: "/testimonial-img-02.png 2x",
    name: "Guy Mckinney",
    job: "Real Estate Agent",
    quote:
      "Coldwell Banker affiliated agents know the value of home, the place we long for at the",
    stars: 3,
  },
  {
    img: "/testimonial-img-03.png 2x",
    name: "Dwight Steward",
    job: "Real Estate Agent",
    quote:
      "Coldwell Banker affiliated agents know the value of home, the place we long for at the",
    stars: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <LayoutContainer>
        <h3 className="testimonial-heading heading heading--medium">
          Here what out customers have to say
        </h3>
        <div className="testimonial-list">
          {testimonialList?.map((item) => (
            <div key={v4()} className="testimonial-item">
              <img srcSet={item.img} alt={item.title} />
              <h4 className="testimonial-name heading heading--small">
                {item.title}
              </h4>
              <p className="testimonial-job text">{item.job}</p>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-stars">
                {new Array(item.stars).fill(0).map(() => (
                  <IconStar key={v4()} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Testimonial;
