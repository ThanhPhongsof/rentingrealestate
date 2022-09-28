const Banner = () => {
  return (
    <section className="banner">
      <div className="main-container">
        <div className="banner-content">
          <h2 className="heading heading--big">
            Lets find a home that's perfect for your family
          </h2>
          <p className="text">
            With over 1 million homes for sale available on the website, Renting
            can match you with a house.
          </p>
          <a href="#!" className="button button--primary">
            Start membership
          </a>
        </div>
        <div className="banner-image main-container-image">
          <img srcSet="/banner-img.png 2x" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
