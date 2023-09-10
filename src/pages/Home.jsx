import React from "react";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <h1 className="text-blue-700 text-2xl font-semibold text-center my-6">
        Products List
      </h1>
      <Products />
    </>
  );
}
