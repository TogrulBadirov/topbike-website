import Product from "../../Product";
import "./index.scss";

const GravelBicycle = () => {
  return (
    <section id="gravel-bicycle">
      <div className="image-container">
        <img
          src="https://topbike-store-demo.myshopify.com/cdn/shop/files/product-v5_a65337f8-a9e0-49c2-9e49-415cee2dfadb.png?v=1613576076"
          alt=""
        />
      </div>
      <div className="products-container">
        <div className="div1"><Product/> </div>
        <div className="div2"><Product/>  </div>
        <div className="div3"> <Product/> </div>
        <div className="div4"><Product/>  </div>
      </div>
    </section>
  );
};

export default GravelBicycle;
