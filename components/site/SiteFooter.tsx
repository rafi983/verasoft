import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer bg-secondary py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h6>About Vera</h6>
            <p>
              Vera is a dedicated software solutions company that aims to provide exceptional services to its
              clients. We are committed to delivering innovative and customized solutions that meet your
              specific business needs.
            </p>
          </div>

          <div className="col-md-4 my-3">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>
                Important: <a href="#">Terms &amp; Conditions</a>, <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                Useful: <a href="/#expertise">Expertise</a>, <a href="/#pricing">Pricing</a>,
                <a href="/#newsletter"> Newsletter</a>
              </li>
              <li>
                Menu: <a href="/">Home</a>, <a href="/#details">Details</a>, <a href="/#solutions">Solutions</a>,
                <a href="/#projects"> Projects</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 my-3">
            <div className="mb-4">
              <a href="#" className="text-decoration-none">
                <i className="fab fa-facebook fa-3x text-light mx-2" />
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-twitter fa-3x text-light mx-2" />
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-instagram fa-3x text-light mx-2" />
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-pinterest fa-3x text-light mx-2" />
              </a>
            </div>
            <p>
              We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
