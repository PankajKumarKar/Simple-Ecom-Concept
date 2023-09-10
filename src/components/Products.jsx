import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Redux/slices/CartSlice";
import { STATUS, fetchProducts } from "../Redux/slices/ProductSlice";

export default function Products() {
  const { productData: products, status } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  // async function fetchProducts() {
  //   try {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log("Error while fetching products", error);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.LOADING) {
    return <div>Loading.....</div>;
  }
  if (status === STATUS.ERROR) {
    return <div>Error</div>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className=" h-[300px] w-[300px] gap-3 flex items-center justify-center flex-col shadow-lg hover:shadow-2xl p-6"
          >
            <img className="w-[120px] h-[150px]" src={product.image} alt="" />
            <h1>{product.title.slice(0, 6)}</h1>
            <h2>Price: {product.price}Rs</h2>
            <button
              className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
              onClick={() => dispatch(addCart(product))}
            >
              Add To Cart
            </button>
          </div>
        ))}
    </div>
  );
}
