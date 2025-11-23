import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="row g-5 mb-5">
          {/* Left Section — Logo & Social */}
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="/" className="footer-logo">
                <img
                  className="brand-img"
                  src="/src/assets/images/lmark-ceramic.png"
                  alt="Lmark Ceramic"
                />
              </a>
            </div>
            <p className="mb-4">
              Lmark Ceramic crafts premium ceramic tiles with modern designs and
              unmatched quality — bringing elegance and durability to every
              space.
            </p>

            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section — Sitemap & Contact */}
          <div className="col-lg-8">
            <div className="row links-wrap">
              {/* ✅ Sitemap Section */}
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">SITEMAP</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* ✅ Contact Info Section */}
              <div className="col-12 col-md-6">
                <h5 className="footer-title">CONTACT</h5>
                <ul className="list-unstyled footer-contact">
                  <li className="footer-item">
                    <div className="icon-text">
                      <span className="fa fa-solid fa-location-dot text-primary"></span>
                      <p>
                        601, Ram Villa Apartment, Ravapar Road,
                        <br />
                        Morbi, Gujarat, India - 363641
                      </p>
                    </div>
                  </li>
                  <li className="footer-item">
                    <div className="icon-text">
                      <span className="fa fa-solid fa-phone text-primary"></span>
                      <a href="tel:+919876543210">+91 99785 58058</a>
                    </div>
                  </li>
                  <li className="footer-item">
                    <div className="icon-text">
                      <span className="fa fa-solid fa-envelope text-primary"></span>
                      <a href="mailto:lmarkceramicmorbi@gmail.com">
                        lmarkceramicmorbi@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                © {currentYear} Lmark Ceramic. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
