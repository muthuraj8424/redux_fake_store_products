import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailsProduct from "./Components/DetailsProduct";
import { useDispatch } from "react-redux";
// import { add } from "./Reducer/Slice";
import { add } from "./Components/Features/Slice";

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setStoreProducts(res.data);
    //    dispatch(add(res.data))
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = storeProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        
        <input
  type="text"
  placeholder="Search products..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="m-4 px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none block mx-auto w-1/2"
/>

      <div className="grid grid-cols-3 gap-4 text-center">
        {filteredProducts.map((product) => (
          <DetailsProduct
          product={product}
            key={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
