import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchProductById, deleteobject } from "./Slice";

import { useSelector } from "react-redux";

function IndvProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.Products);
  console.log(product);
  const { productID } = useParams();
  console.log(productID);
  // let name = {
  //   title: "Product",
  //   id: productID,
  // };
  useEffect(() => {
    dispatch(fetchProductById(productID));
    dispatch(fetchProduct(productID));
    return () => {
      dispatch(deleteobject(product));
    };
  }, [productID]);

  return Object.keys(product).length > 0 ? (
    <div className="flex justify-center">
      <div className="p-3 m-7 w-96 shadow-xl border rounded-lg ">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>

      <div className="flex flex-col items-center">
        <p className="mb-2">
          <span className="font-extrabold">ID:</span> {product.id}
        </p>
        <img
          src={product.image || "placeholder-image-url"}
          alt=""
          className="w-64 mb-2"
        />
        <p className="mb-2">
          <span className="font-extrabold">Title:</span>{" "}
          {product.title || "Unknown Title"}
        </p>
        <p className="mb-2">
          <span className="font-extrabold">Description:</span>{" "}
          {product.description || "No description available"}
        </p>
        <p className="mb-2">
          <span className="font-extrabold">Price:</span> $
          {product.price || "Unknown Price"}
        </p>
        {/* Add other product details as needed */}
      </div>
    </div>
    </div>
  ) : (
    <div className="text-xl font-extrabold text-center">loading....</div>
  )
}
export default IndvProduct;
