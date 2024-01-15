import Product from "../../Product";
import "./index.scss";

const GravelBicycle = () => {
  const item = {
    image:"https://res.cloudinary.com/togrul/image/upload/v1705300095/ovovxfjyttlz1ipky22j.webp",
    title: "RELEASE 2",
    description:	"Bicycle",
    price:3250,
    discount:5
}
  return (
    <section id="gravel-bicycle">
      <div className="image-container">
        <img
          src="https://topbike-store-demo.myshopify.com/cdn/shop/files/product-v5_a65337f8-a9e0-49c2-9e49-415cee2dfadb.png?v=1613576076"
          alt=""
        />
      </div>
      <div className="products-container">
        <div className="div1"><Product item={item}/> </div>
        <div className="div2"><Product  item={item}/>  </div>
        <div className="div3"> <Product  item={item}/> </div>
        <div className="div4"><Product  item={item}/>  </div>
      </div>
    </section>
  );
};

export default GravelBicycle;
