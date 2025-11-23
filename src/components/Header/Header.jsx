import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="brand-img"
              src="/src/assets/images/lmark-ceramic.png"
              alt="lmark-ceramic"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li
                className="nav-item"
              >
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                  HOME
                </NavLink>
              </li>
              <li
                className="nav-item"
              >
                <NavLink to="/about" className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                  ABOUT US
                </NavLink>
              </li>
              <li
                className="nav-item"
              >
                <NavLink to="/products" className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                  PRODUCTS
                </NavLink>
              </li>
              <li
                className="nav-item"
              >
                <NavLink to="/contact" className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
