const FooterSection = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="assets/img/landing/fourbit-logo-invert.png"
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Revolutionizing your tech game. Contact us for innovative
                  software solutions and top-notch IT consulting services.
                </p>
                {/* <ul className="social-media-icons">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Our Services</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="service-details.html">Web Development</a>
                  </li>
                  <li>
                    <a href="service-details.html">Web Solution</a>
                  </li>
                  <li>
                    <a href="service-details.html">App Development</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Quick Links</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="project.html">Project</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="email">
                    <a href="tell:info@example.com">info@fourbit.io</a>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 col-lg-4 col-xl-5">
              <div className="copy-txt">
                <span>
                  Copyright 2023 <b>fourbit</b>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 col-xl-7">
              <ul className="footer-bottom-menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
