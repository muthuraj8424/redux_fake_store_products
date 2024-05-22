import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./Features/Slice";
import { Link } from "react-router-dom";
// import { subtractproduct  , addproduct} from "./Features/Slice";
function DetailsProduct({ image, name, price, product }) {
  const dispatch = useDispatch();
  const addtoCart = (product) => {
    console.log(product);
    dispatch(add(product));
    // console.log({add});
  };

  return (
    <>
      <div className="m-2 p-4 shadow-lg flex flex-col justify-center items-center">
        <Link to={`/products/${product.id}`}>
          <img src={image} alt="product Image" className="w-32 h-32" />
        </Link>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-lg font-semibold mt-2">{price}</h4>
        <div className="flex flex-row items-center space-x-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => addtoCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;
