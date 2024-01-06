import { Link } from "react-router-dom";
import "./index.scss";

const Collections = () => {
  return (
    <section id="collection">
      <div className="collection-container">
        <div className="first-collection">
          <img
            src="https://topbike-store-demo.myshopify.com/cdn/shop/files/a_b92dc9f6-36bc-4ba2-bd95-26172a230fb1.jpg?v=1613577964"
            alt=""
          />
          <div className="collection-content">
            <h5 className="title">Off Road Collection</h5>
            <p className="sub-title">Daily Essentials</p>
            <Link className="explore-button">Explore all</Link>
          </div>
        </div>
        <div className="second-collection">
          <img
            src="https://topbike-store-demo.myshopify.com/cdn/shop/files/a1.jpg?v=1613577964"
            alt=""
          />
          <div className="collection-content">
            <h5 className="title">Sport Bicycle Collection</h5>
            <p className="sub-title">Daily Essentials</p>
            <Link className="explore-button">Explore all</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
