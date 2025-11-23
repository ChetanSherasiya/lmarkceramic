import { Helmet } from "react-helmet-next";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Lmark Ceramic</title>
        <meta
          name="description"
          content="Driven by innovation and excellence, Lmark Ceramic offers beautifully crafted tiles that redefine aesthetics and performance."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-7">
							<SectionHeader
                title="About Us"
                subtitle="Driven by innovation and excellence, Lmark Ceramic offers beautifully crafted tiles that redefine aesthetics and performance."
              />
						</div>
						<div className="col-lg-5">
							<div className="hero-img-wrap"></div>
						</div>
					</div>
				</div>
			</div>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Who We Are</h2>
              <p>
                Lmark Ceramic is a trusted trading company offering high-quality ceramic, porcelain, GVT/PGVT, and wall tiles for modern and classic interiors. With a commitment to excellence, we source and deliver tiles that blend style, durability, and superior craftsmanship. Our goal is to provide designers, architects, and homeowners with premium tile solutions that transform every space with elegance and precision.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Premium Tile Supplier</h3>
                    <p>
                      Delivering high-quality ceramic, porcelain, and GVT/PGVT tiles.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Modern & Classic Designs</h3>
                    <p>
                      Curated collections to suit every interior style.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Trusted Trading Company</h3>
                    <p>
                      Connecting customers with reliable, reputed manufacturers.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Quality-Driven Approach</h3>
                    <p>
                      Focused on durability, design excellence, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="/src/assets/images/img-grid-7.jpg"
                  alt="Why Choose Lmark Ceramic"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src="/src/assets/images/tiles-anderson-articleLarge.png" alt="Untree.co" /></div>
                <div className="grid grid-2"><img src="/src/assets/images/img-grid-6.jpg" alt="Untree.co" /></div>
                <div className="grid grid-3"><img src="/src/assets/images/why-choose-us-img.jpg" alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">What We Stand For</h2>
              <p>At Lmark Ceramic, we believe in quality, trust, and customer satisfaction. Our team works closely with reliable manufacturers and design experts to bring the latest trends and timeless styles to the market. From product selection to final delivery, we ensure a seamless experience backed by knowledge, transparency, and dedication. We aim to inspire spaces with tiles that combine innovation, strength, and lasting beauty.</p>

              <ul className="list-unstyled custom-list my-4">
                <li>Commitment to Quality</li>
                <li>Customer-First Service</li>
                <li>Design Innovation</li>
                <li>Reliable Partnerships</li>
              </ul>
              <p><a href="/collections" className="btn btn-primary">Explore</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
