import "./index.scss";
import { FaRegHeart } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
const Product = ({item}) => {
  return (
    <div className="product">
      <div className="product-img">
      <img
        src={item && item.image}
        alt=""
      />
      <div className="product-icons">
        <button><FaRegHeart /></button>
        <button><MdOutlineShoppingBag /></button>
        <button><BsSearch /></button>
      </div>
      </div>
      <div className="product-content">
        <h5 className="product-title">
        {item && item.title}
        </h5>
        <p className="product-price">
        ${item && item.price}
        {/* <span className="old-price">
        $5,000.00
        </span> */}
        </p>
      </div>
    </div>
  );
};

export default Product;
