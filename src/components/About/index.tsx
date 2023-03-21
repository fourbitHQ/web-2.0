const About = () => {
  return (
    <section className="about-area sec-mar-bottom">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 or-2 wow animate fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="sec-title layout2">
              <span>Get To Know</span>
              <h2>About Us</h2>
            </div>
            <div className="about-left">
              <h3>We do design, code & develop Software finally launch.</h3>
              <p>
                Our company offers software development services, which involve
                the process of designing, coding and developing software that
                caters to diverse business needs. We ensure that the final
                product is delivered to the highest standard through an
                impressive launch.
              </p>
              <div className="company-since">
                <div className="company-logo">
                  <img src="assets/img/landing/fourbit-logo.png" alt="" />
                </div>
                <strong>#1</strong>
                <h4>Best Creative IT Agency And Solutions</h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 or-1 wow animate fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="about-right">
              <div className="banner-1">
                <img src="assets/img/landing/about.jpeg" alt="" />
              </div>
              <div className="banner-2">
                <img src="assets/img/landing/about-2.jpeg" alt="" />
                {/* <div className="banner2-inner">
                  <div className="play">
                    <a
                      className="video-popup"
                      href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
