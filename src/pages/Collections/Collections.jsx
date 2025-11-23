import { Helmet } from "react-helmet-next";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Lmark Ceramic | Collections</title>
        <meta
          name="description"
          content="Explore a wide range of ceramic wall and floor tiles by Lmark Ceramic. Modern, durable, and elegant."
        />
      </Helmet>
      {/* Hero Section */}
      <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-7">
							<SectionHeader
                title="Collections"
                subtitle="The Lmark Collection brings together modern and classic tile designs crafted for style, durability, and everyday elegance."
                button="Contact Us"
                link="/contact"
              />
						</div>
						<div className="col-lg-5">
							<div className="hero-img-wrap"></div>
						</div>
					</div>
				</div>
			</div>
      {/* Wall Tiles */}
      <section className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Wall Tiles</h2>
              <p>
                Lmark Ceramic Wall Tiles are crafted to bring style, protection, and personality to every interior. With unique textures, modern patterns, and timeless shades, our wall tiles enhance spaces with elegance and durability.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Modern & Classic Designs</h3>
                    <p>
                      Patterns and textures suitable for kitchens, bathrooms, and feature walls.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Smooth & Stylish Finishes</h3>
                    <p>
                      Matte, glossy, and digital designs for every interior theme.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Easy to Clean & Maintain</h3>
                    <p>
                      Stain-resistant surfaces for long-lasting beauty.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Perfect for Every Space</h3>
                    <p>
                      Ideal for homes, offices, hotels, and commercial interiors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="/src/assets/images/collections/wall/wall-tile-1.jpg"
                  alt="Wall Tiles"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porcelain Tiles */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src="/src/assets/images/collections/porcelain/porcelain-tile-2.jpg" alt="Untree.co" /></div>
                <div className="grid grid-2"><img src="/src/assets/images/collections/porcelain/porcelain-tile-1.jpg" alt="Untree.co" /></div>
                <div className="grid grid-3"><img src="/src/assets/images/collections/porcelain/porcelain-tile-3.jpg" alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">Porcelain Tiles</h2>
              <p>Lmark Ceramic Porcelain Tiles are engineered for strength, stability, and long-term performance. Designed to handle both interior and exterior use, they combine natural looks with exceptional durability.</p>

              <ul className="list-unstyled custom-list my-4">
                <li>Superior Strength</li>
                <li>Low Water Absorption</li>
                <li>Natural & Modern Designs</li>
                <li>High Load Resistance</li>
              </ul>
              <p><a href="#" className="btn btn-primary">Explore</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* GVT/PGVT */}
      <section className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">GVT/PGVT</h2>
              <p>
                Our GVT/PGVT collection blends advanced technology with luxurious finishes. Designed for premium interiors, these tiles offer high-gloss brilliance or elegant matte textures that transform any setting.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Digital Glazed Technology</h3>
                    <p>
                      Sharp designs with natural texture depth.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Glossy & Matte Options</h3>
                    <p>
                      Mirror-like shine or subtle sophisticated finish.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>High Durability</h3>
                    <p>
                      Scratch-resistant and perfect for heavy-traffic areas.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <h3>Large Format Designs</h3>
                    <p>
                      Ideal for seamless, expansive floor and wall layouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="/src/assets/images/collections/gvt-pgvt/gvt-tile-2.jpg"
                  alt="Why Choose Lmark Ceramic"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
