import "./index.scss";

const Product = () => {
  return (
    <div className="product">
      <div className="product-img">
      <img
        src="https://topbike-store-demo.myshopify.com/cdn/shop/products/product3_088179d9-6d45-424c-9cba-5113d4cfd1ca.jpg?v=1608081612"
        alt=""
      />
      </div>
      <div className="product-content">
        <h5 className="product-title">
        DiamondBlack Haanjo 8C Carbon
        </h5>
        <p className="product-price">
        $4,400.00
        <span className="old-price">
        $5,000.00
        </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
