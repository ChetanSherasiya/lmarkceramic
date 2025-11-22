const ProductSection = () => {
  return (
    <div className="product-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                    <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                    <p><a href="/products" className="btn btn-primary">Explore</a></p>
                </div> 
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/product-1.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">Wall Tiles</h3>
                    </a>
                </div> 
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/product-2.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">Porcelain Tiles</h3>
                    </a>
                </div>
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/product-3.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">GVT/PGVT</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductSection;
