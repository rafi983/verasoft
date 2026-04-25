export default function HomeContent() {
  return (
    <>
      <header className="header position-relative">
        <img
          src="/images/vertical-decoration-left.svg"
          alt=""
          className="vertical-decoration position-absolute d-none d-md-block"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5">
              <h1 className="xl-text mt-5">
                Software Solutions For
                <span className="text-primary fw-bold"> Small Business, Startups, Enterprise</span>
              </h1>
              <p className="lead">
                Boost your business with cutting-edge software solutions tailored to the needs of modern
                enterprises.
              </p>
              <a href="#contact" className="btn btn-primary text-white">
                Lear More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="partners py-4 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h6 className="text-center mb-4 text-uppercase">Our Partners</h6>
              <div className="d-flex justify-content-center align-items-center text-center">
                <div>
                  <img src="/images/partner-logo-1.png" alt="" className="mx-4" />
                </div>
                <div className="d-none d-sm-block">
                  <img src="/images/partner-logo-2.png" alt="" className="mx-4" />
                </div>
                <div className="d-none d-md-block">
                  <img src="/images/partner-logo-3.png" alt="" className="mx-4" />
                </div>
                <div className="d-none d-lg-block">
                  <img src="/images/partner-logo-4.png" alt="" className="mx-4" />
                </div>
                <div className="d-none d-lg-block">
                  <img src="/images/partner-logo-5.png" alt="" className="mx-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact my-7">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fw-bold">Get More Information</h2>
              <hr className="hr-heading" />
              <p className="lead">
                We provide innovative software solutions that empower businesses to thrive in the digital era.
              </p>
              <ul className="list-unstyled lh-lg">
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3" />
                  <div>
                    <strong>Customized Solutions: </strong> Our solutions are designed to meet your specific
                    business needs, ensuring maximum efficiency and productivity.
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3" />
                  <div>
                    <strong>Seamless Integration:</strong> We seamlessly integrate our software with your
                    existing systems, minimizing disruptions and optimizing workflows.
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1">
              <form>
                <div className="mb-4">
                  <input type="text" className="form-control bg-secondary" placeholder="Enter name" />
                </div>
                <div className="mb-4">
                  <input type="email" className="form-control bg-secondary" placeholder="Enter email" />
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control bg-secondary" placeholder="Enter phone" />
                </div>
                <div className="mb-4">
                  <select name="interested" id="interested" className="form-control bg-secondary">
                    <option>Interested In...</option>
                    <option value="erp">ERP Solution</option>
                    <option value="crm">CRM Solution</option>
                    <option value="cms">CMS Solution</option>
                    <option value="sfa">SFA Solution</option>
                  </select>
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" id="agree-check" />
                  <label htmlFor="agree-check" className="form-check-label">
                    I agree to the <a href="/privacy">Privacy Policy</a>
                  </label>
                </div>
                <div className="d-grid gap-2">
                  <input type="submit" value="Submit" className="btn btn-primary text-white" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-teaser my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="privacy-teaser-card bg-secondary p-4 p-md-5 rounded-2">
                <h5>
                  <span className="badge bg-primary rounded-0 text-uppercase">Privacy</span>
                </h5>
                <h2 className="fw-bold mt-3">Your Data, Handled Transparently</h2>
                <p className="mb-4">
                  We are committed to protecting personal information and being clear about what we collect,
                  why we collect it, and how we secure it.
                </p>
                <a href="/privacy" className="btn btn-primary text-white">
                  Read Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions my-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">Solutions</span>
              </h5>
              <h2 className="fw-bold">Vera Provides Software Solutions For Business Acceleration</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-secondary">
                <img src="/images/solution-1.jpg" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">ERP Software Solutions</h5>
                  <p className="card-text">
                    Our ERP software solution streamlines your business processes and enhances operational
                    efficiency.
                  </p>
                  <div className="badge bg-primary p-2 text-uppercase">Management</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-secondary">
                <img src="/images/solution-2.jpg" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">CRM Software Solutions</h5>
                  <p className="card-text">
                    Our CRM software solution helps you build stronger customer relationships and drive sales
                    growth.
                  </p>
                  <div className="badge bg-dark p-2 text-uppercase">Marketing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-secondary">
                <img src="/images/solution-3.jpg" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">SFA Software Solutions</h5>
                  <p className="card-text">
                    Our SFA software solution empowers your sales team with the tools they need to drive
                    revenue growth.
                  </p>
                  <div className="badge bg-primary p-2 text-uppercase">Management</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-secondary">
                <img src="/images/solution-4.jpg" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">WMS Software Solutions</h5>
                  <p className="card-text">
                    Our WMS software solution optimizes your warehouse operations and improves inventory
                    management.
                  </p>
                  <div className="badge bg-dark p-2 text-uppercase">Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="details my-5 position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6">
              <h2 className="fw-bold">Evaluation &amp; Deployment</h2>
              <hr className="hr-heading" />
              <p>
                We offer comprehensive evaluation and deployment services to ensure a smooth and successful
                implementation of our software solutions.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/images/details-1.jpg" alt="" className="img-fluid rounded-2" />
            </div>
          </div>
        </div>
        <img src="/images/vertical-decoration-left.svg" alt="" className="vertical-decoration position-absolute d-none d-md-block" />
      </section>

      <section className="details-2 my-5 position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6">
              <img src="/images/details-2.jpg" alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">Maintenance &amp; Support</h2>
              <hr className="hr-heading" />
              <p>
                We provide comprehensive maintenance and support services to ensure the smooth and uninterrupted
                operation of your software solutions.
              </p>
            </div>
          </div>
        </div>
        <img src="/images/vertical-decoration-right.svg" alt="" className="vertical-decoration position-absolute d-none d-md-block" />
      </section>

      <section id="expertise" className="expertise bg-secondary py-5 my-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">Expertise</span>
              </h5>
              <h2 className="fw-bold">Expertise Strong Points</h2>
            </div>
          </div>
          <div className="row">
            {[
              { title: "Flexible Services", icon: "fas fa-lightbulb" },
              { title: "Great Design", icon: "fas fa-desktop" },
              { title: "Easy To Use", icon: "fas fa-wifi" },
              { title: "Smart Options", icon: "fas fa-cog" },
              { title: "Advanced Tech", icon: "fas fa-glasses" },
              { title: "Good Expertise", icon: "fas fa-graduation-cap" },
              { title: "Detailed Reports", icon: "fas fa-chart-bar" },
              { title: "Cloud Storage", icon: "fas fa-cloud" },
            ].map((item) => (
              <div className="col-md-3" key={item.title}>
                <div className="card bg-transparent border-0 text-center mb-3">
                  <div className="card-image">
                    <i className={`${item.icon} fa-5x text-primary`} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video my-6">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="position-relative">
                <img src="/images/video-preview.jpg" alt="" className="img-fluid" />
                <a className="video-btn" href="https://www.youtube.com/watch?v=u72H_zZzkcw" target="_blank" rel="noreferrer">
                  <span className="video-play-button">
                    <span />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing my-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">Pricing</span>
              </h5>
              <h2 className="fw-bold">Flexible Pricing Options</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="card bg-secondary text-center rounded-0">
                <div className="card-body">
                  <div className="xl-text fw-bold">$99</div>
                  <h4 className="card-title text-primary text-uppercase fw-bold mb-5">Standard</h4>
                  <p>
                    Our standard pricing plan offers a comprehensive set of features for your software needs
                  </p>
                  <ul className="list-unstyled lh-lg mt-5">
                    <li className="text-uppercase fs-5 fw-bold">Subscribers List</li>
                    <li className="text-uppercase fs-5 fw-bold">User Admin Control</li>
                  </ul>
                  <a href="#contact" className="btn btn-primary text-white mt-6 fw-bold">
                    Inquire
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-secondary text-center rounded-0">
                <div className="card-body">
                  <div className="xl-text fw-bold">$199</div>
                  <h4 className="card-title text-primary text-uppercase fw-bold mb-5">Advanced</h4>
                  <p>
                    Unlock additional enhanced capabilities. Take your software solutions to the next level
                  </p>
                  <ul className="list-unstyled lh-lg mt-5">
                    <li className="text-uppercase fs-5 fw-bold">Limited Storage Space</li>
                    <li className="text-uppercase fs-5 fw-bold">Free Cloud Storage</li>
                  </ul>
                  <a href="#contact" className="btn btn-primary text-white mt-6 fw-bold">
                    Inquire
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-secondary text-center rounded-0">
                <div className="card-body">
                  <div className="xl-text fw-bold">$299</div>
                  <h4 className="card-title text-primary text-uppercase fw-bold mb-5">Complete</h4>
                  <p>
                    Our complete pricing plan offers an all-inclusive package with advanced features
                  </p>
                  <ul className="list-unstyled lh-lg mt-5">
                    <li className="text-uppercase fs-5 fw-bold">Deployment Protocol</li>
                    <li className="text-uppercase fs-5 fw-bold">Premium Support Pack</li>
                  </ul>
                  <a href="#contact" className="btn btn-primary text-white mt-6 fw-bold">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects my-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">Projects</span>
              </h5>
              <h2 className="fw-bold">Projects We Are Proud Of</h2>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div className="col-md-4 mb-4" key={id}>
                <div className="card bg-secondary">
                  <img src={`/images/project-${id}.jpg`} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Project {id}</strong> - Donec bibeum mollis liga sit amet pulvinar sed viverra
                      noris
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="newsletter my-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h2 className="fw-bold">Subscribe And Follow</h2>
              <p>
                Stay updated with our latest news and announcements. Subscribe to our newsletter and follow us
                on social media for valuable insights and exciting updates.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter Email Address" />
                <button className="btn btn-primary text-white rounded-0" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
