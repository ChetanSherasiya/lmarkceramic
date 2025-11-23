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
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                With decades of experience, Lmark Ceramic stands for quality,
                trust, and innovation in every tile we produce.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/src/assets/images/truck.svg"
                        alt="Fast Shipping"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Fast &amp; Reliable Delivery</h3>
                    <p>
                      We ensure on-time delivery across India and abroad with
                      our trusted logistics partners.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/src/assets/images/bag.svg"
                        alt="Easy Shopping"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Easy Order Process</h3>
                    <p>
                      Our streamlined order system ensures a hassle-free buying
                      experience for every customer.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/src/assets/images/support.svg"
                        alt="Support"
                        className="img-fluid"
                      />
                    </div>
                    <h3>24/7 Customer Support</h3>
                    <p>
                      Our team is always available to answer questions and
                      provide expert assistance.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/src/assets/images/return.svg"
                        alt="Returns"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Quality Guarantee</h3>
                    <p>
                      We stand behind our craftsmanship and ensure customer
                      satisfaction with every product.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="/src/assets/images/why-choose-us-img.jpg"
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
                <div className="grid grid-1"><img src="/src/assets/images/img-grid-1.jpg" alt="Untree.co" /></div>
                <div className="grid grid-2"><img src="/src/assets/images/img-grid-2.jpg" alt="Untree.co" /></div>
                <div className="grid grid-3"><img src="/src/assets/images/img-grid-3.jpg" alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p><a href="#" className="btn btn-primary">Explore</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
