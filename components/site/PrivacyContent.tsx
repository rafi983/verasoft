export default function PrivacyContent() {
  return (
    <>
      <header className="bg-secondary p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">Privacy</span>
              </h5>
              <h1 className="fw-bold">Privacy Policy</h1>
              <p className="lead mb-0">
                Effective Date: April 25, 2026. This policy explains how Vera Software Solutions handles
                personal and business information across our website and services.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>1. Information We Collect</h2>
              <p className="mb-5">
                We may collect contact details (such as name, email, phone), company details, and service
                inquiry data submitted through our forms. We also collect limited technical data such as browser,
                device type, and page interactions for analytics and security.
              </p>

              <h4>1.1 Data You Provide Directly</h4>
              <p className="mb-5">
                This includes information you submit when requesting demos, project consultations, support, or
                newsletter updates.
              </p>

              <h2>2. How We Use Information</h2>
              <p className="mb-5">
                We use collected information to respond to requests, deliver services, improve product quality,
                maintain security, and communicate relevant service updates.
              </p>

              <h4>2.1 Legal Basis and Consent</h4>
              <p className="mb-5">
                Where required, we process personal data based on user consent, contractual necessity, or
                legitimate business interest while respecting applicable data protection laws.
              </p>

              <h2>3. Data Sharing and Retention</h2>
              <p className="mb-5">
                We do not sell personal data. Information may be shared with trusted service providers who support
                hosting, analytics, communications, or operations under confidentiality obligations. Data is
                retained only as long as needed for operational, legal, or contractual purposes.
              </p>

              <h2>4. Your Rights</h2>
              <ul className="list-unstyled mb-4 lh-lg">
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3" />
                  <p>
                    Request access to the personal information we hold about you.
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3" />
                  <p>
                    Request correction or deletion of inaccurate or unnecessary data.
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3" />
                  <p>
                    Withdraw consent for marketing communications at any time.
                  </p>
                </li>
              </ul>

              <h2>5. Contact</h2>
              <p className="mb-0">
                For privacy-related requests, contact us at <a href="mailto:contact@site.com">contact@site.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
