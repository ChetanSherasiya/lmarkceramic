const HelpSection = () => {
  return (
    <div className="we-help-section">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="imgs-grid">
                        <div className="grid grid-1"><img src="/assets/images/tiles-anderson-articleLarge.png" alt="Untree.co" /></div>
                        <div className="grid grid-2"><img src="/assets/images/img-grid-6.jpg" alt="Untree.co" /></div>
                        <div className="grid grid-3"><img src="/assets/images/why-choose-us-img.jpg" alt="Untree.co" /></div>
                    </div>
                </div>
                <div className="col-lg-5 ps-lg-5">
                    <h2 className="section-title mb-4">Bookmatch Collection</h2>
                    <p>The Lmark Ceramic Bookmatch Collection brings artistic luxury to life by pairing tiles in perfectly mirrored patterns. Each piece is crafted to create a seamless, continuous design that transforms walls and floors into breathtaking visual statements. With precision printing, rich textures, and elegant finishes, our Bookmatch Collection elevates every space with unmatched sophistication and style.</p>

                    <ul className="list-unstyled custom-list my-4">
                        <li>Mirror-Perfect Designs</li>
                        <li>Seamless Continuity</li>
                        <li>Ideal for Feature Walls</li>
                        <li>Premium Strength & Finish</li>
                    </ul>
                    <p><a href="/collections" className="btn btn-primary">Explore</a></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HelpSection;
