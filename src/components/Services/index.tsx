
const Services = () => {
  return (
    <section className="services-area sec-mar">
      <div className="container">
        <div
          className="title-wrap wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms">
          <div className="sec-title">
            <span>Our Solutions</span>
            <h2>Services</h2>
            <p>
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis
              sapien, quis commodo libero.
            </p>
          </div>
        </div>
        <div className="swiper services-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms">
              <div className="single-service">
                <span>01</span>
                <div className="icon">
                  <img src="assets/img/icons/service-icon-1.png" alt="" />
                </div>
                <h4>Web Design</h4>
                <p>
                  Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                  dolor.
                </p>
                <div className="read-btn">
                  <a href="service-details.html">Read More</a>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms">
              <div className="single-service">
                <span>02</span>
                <div className="icon">
                  <img src="assets/img/icons/service-icon-2.png" alt="" />
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                  dolor.
                </p>
                <div className="read-btn">
                  <a href="service-details.html">Read More</a>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms">
              <div className="single-service">
                <span>03</span>
                <div className="icon">
                  <img src="assets/img/icons/service-icon-3.png" alt="" />
                </div>
                <h4>Software Development</h4>
                <p>
                  Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                  dolor.
                </p>
                <div className="read-btn">
                  <a href="service-details.html">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination d-md-none d-md-block"></div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Services;
