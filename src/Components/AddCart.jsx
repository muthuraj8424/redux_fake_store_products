import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove, increaseamount, decreaseamount } from "./Features/Slice";

function AddCart() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.product.cart);
 const items = useSelector((state) => state.product.items)
  const handleDelete = (product) => {
    dispatch(remove(product));
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4 shadow-lg p-3">
        Products in Cart
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {productsInCart.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mb-4"
            />
            <Link
              to={`/product/${product.id}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {product.title}
            </Link>
            <p className="text-gray-600 mt-1"><b>Price</b>-${product.price}</p>
          <button
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md mt-2  items-center"
              onClick={() => handleDelete(product)}
            >
              Remove
            </button> 
             {/* 
            <div className="p-2 flex flex-row space-x-1 items-center">
              <button onClick={()=>dispatch(decreaseamount(product.id))}>
                -
              </button>
              <span>{items}</span>
              <button onClick={() => dispatch(increaseamount(product.id))}>+</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCart;
