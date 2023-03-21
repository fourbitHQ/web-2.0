const Projects = () => {
  return (
    <section className="project-area sec-mar">
      <div className="container">
        <div className="title-wrap">
          <div className="sec-title">
            <span>Case Study</span>
            <h2>Project</h2>
            <p>
              Our organization has successfully executed numerous projects
              across various markets and is currently catering to a diverse
              global clientele.
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <ul className="isotope-menu">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".ui">UI/UX</li>
              <li data-filter=".web">Web Design</li>
              <li data-filter=".developing">Developing</li>
              <li data-filter=".graphic">Graphic Design</li>
            </ul>
          </div>
        </div> */}
        <div className="row g-4 project-items">
          <div className="col-md-6 col-lg-4 single-item graphic ui">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-1.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>Software</span>
              <h4>Desktop Mockup</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 single-item developing web">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-2.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>Template</span>
              <h4>Creative Agency</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 single-item developing">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-3.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>App</span>
              <h4>Mobile Crypto Wallet</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 single-item graphic">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-4.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>UI Kit</span>
              <h4>E-Shop Ecommerce</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 single-item ui">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-5.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>Graphic</span>
              <h4>Art Deco Cocktails</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 single-item web">
            <div className="item-img">
              <a href="project.html">
                <img src="assets/img/project/project-6.jpg" alt="" />
              </a>
            </div>
            <div className="item-inner-cnt">
              <span>3D Design</span>
              <h4>Low poly Base mesh</h4>
              <div className="view-btn">
                <a href="project-details.html">view details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
