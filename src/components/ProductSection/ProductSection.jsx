const ProductSection = () => {
  return (
    <div className="product-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 className="mb-4 section-title">Quality is the core of Lmark Ceramic</h2>
                    <p className="mb-4">Each tile in the Lmark collection is a true expression of our commitment to creativity and innovation. Our designers—along with industry-renowned artists—consistently elevate ceramic tile design to new heights. </p>
                    <p><a href="/products" className="btn btn-primary">Explore</a></p>
                </div> 
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/wall-tile.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">Wall Tiles</h3>
                    </a>
                </div> 
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/porcelain-tile.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">Porcelain Tiles</h3>
                    </a>
                </div>
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a className="product-item" href="/products">
                        <img src="/src/assets/images/GVT-PGVT.jpg" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">GVT/PGVT</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductSection;
