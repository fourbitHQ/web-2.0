import React from "react";

const HeaderSection = () => {
  return (
      <header className="header-area position_top">
        <div className="site-logo">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/landing/fourbit-logo-invert.png" alt="image" />
            </a>
          </div>
        </div>
        <div className="main-menu">
          <nav className="main-nav">
            <div className="mobile-menu-logo">
              <a href="index.html">
                <img src="assets/img/landing/fourbit-logo-invert.png" alt="" />
              </a>
              <div className="remove">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <a href="contact.html">Get A Quote</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <a href="contact.html">Get A Quote</a>
            </div>
          </div>
          <div className="mobile-menu">
            <a href="javascript:void(0)" className="cross-btn">
              <span className="cross-top"></span>
              <span className="cross-middle"></span>
              <span className="cross-bottom"></span>
            </a>
          </div>
        </div>
      </header>
  );
};

export default HeaderSection;
