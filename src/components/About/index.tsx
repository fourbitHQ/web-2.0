
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
                Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                dolor. Class onlin aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos only himenaeos. Praesent nec neque
                at dolor venenatis consectetur eu quis ex. the Donec lacinia
                placerat felis non aliquam.
              </p>
              <div className="company-since">
                <div className="company-logo">
                  <img src="assets/img/logo-dark.svg" alt="" />
                </div>
                <strong>#1</strong>
                <h4>
                  Best Creative IT Agency And Solutions <span>Since 2005.</span>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 or-1 wow animate fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="about-right">
              <div className="banner-1">
                <img src="assets/img/about-baner-1.jpg" alt="" />
              </div>
              <div className="banner-2">
                <img src="assets/img/about-baner-2.jpg" alt="" />
                <div className="banner2-inner">
                  <div className="play">
                    <a
                      className="video-popup"
                      href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
