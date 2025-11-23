import SectionHeader from "../SectionHeader/SectionHeader";

const HeroSection = () => {
  return (
    <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<SectionHeader
								title="Products"
								subtitle="We’d love to hear from you! Send us a message or reach us through the following channels."
								button="Explore"
								link="/products"
							/>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="/assets/images/product-highlight2.png" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
  );
};

export default HeroSection;
