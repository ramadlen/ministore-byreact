// Cara Nested Component yang direkommen dan terhubung di product.jsx

import { FormatRupiah } from "@arismun/format-rupiah";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const CardProduct = (props) => {
  const { isDarkMode } = useContext(DarkMode);
  const { children } = props;
  return (
    <div
      className={`w-full  max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-bettwen ${isDarkMode && "bg-slate-700"}`}
    >
      {children}
    </div>
  );
};
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};
const Body = (props) => {
  const { children, name } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">
          {/* {
            price.toLocaleString[
              ("id-ID", { styles: "currency", currency: "IDR" })
            ]
          } */}
          <FormatRupiah value={price} />
        </span>
        <Button
          className="bg-lime-600"
          onClick={() => dispatch(addToCart({ id, qty: 1 }))}
        >
          {" "}
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
