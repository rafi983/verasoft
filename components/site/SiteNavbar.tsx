import Image from "next/image";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo.svg" alt="Vera" width={100} height={34} priority />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#solutions">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#details">
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#expertise">
                Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#projects">
                Projects
              </Link>
            </li>
          </ul>

          <span className="nav-item">
            <span className="fa-stack">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x text-white" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x text-white" />
              </a>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}
