import { useEffect } from "react";
import { v4 } from "uuid";

const ctaList = [
  { img: "/cta-img-01.jpg 2x", title: "Newcastle" },
  { img: "/cta-img-02.jpg 2x", title: "San Francisco, California" },
  { img: "/cta-img-03.jpg 2x", title: "Washington DC" },
  { img: "/cta-img-04.jpg 2x", title: "Chicago" },
  { img: "/cta-img-05.jpg 2x", title: "Baltimore" },
  { img: "/cta-img-01.jpg 2x", title: "Newcastle" },
  { img: "/cta-img-02.jpg 2x", title: "San Francisco, California" },
  { img: "/cta-img-03.jpg 2x", title: "Washington DC" },
];

const CTA = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".cta-list");
    let isMouseDown = false;
    let startX, scrollLeft;

    wrapper.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    wrapper.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      const x = e.pageX - wrapper.offsetLeft;
      // 3 la toc do srcoll
      const walk = (x - startX) * 3;
      wrapper.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <section className="cta">
      <h3 className="cta-heading heading heading--medium">
        We build more projects successful
      </h3>
      <div className="cta-list">
        {ctaList?.map((item) => (
          <div className="cta-item" key={v4()}>
            <div className="cta-main">
              <img srcSet={item.img} alt={item.title} className="cta-image" />
              <div className="cta-content">
                <h4 className="cta-title heading heading--suppersmall">
                  {item.title}
                </h4>
                <a href="#!" className="cta-button button button--secondary">
                  See more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;
