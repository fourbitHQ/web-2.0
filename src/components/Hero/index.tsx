const Hero = () => {
  return (
    <section className="hero-area">
      <div className="ken-burns-slideshow">
        <img src="assets/img/landing/hero.jpeg" alt="image" />
      </div>
      {/* <div className="verticale-social">
        <ul className="vertical-media">
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">Linkedin</a>
          </li>
        </ul>
      </div> */}
      <div className="hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>
                  Revolutionize Your Tech Game with <span>FourBit</span>
                </h1>
                <p>
                  Whether you're looking to develop a new application, redesign
                  your website, or improve your IT infrastructure, our team is
                  here to help. We pride ourselves on delivering quality work
                  that exceeds expectations and providing exceptional customer
                  service that fosters long-term relationships with our clients.
                </p>
                <div className="buttons">
                  <div className="cmn-btn">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <a href="about.html">About Us</a>
                  </div>
                  <div className="cmn-btn layout-two">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <a href="project.html">See Project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
