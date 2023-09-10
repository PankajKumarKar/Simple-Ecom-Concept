import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartItem = useSelector((state) => state.cart);
  return (
    <div className="flex h-16 shadow-md items-center justify-between px-8">
      {/* logo */}
      <Link to="/" className="text-3xl font-bold cursor-pointer">
        Redux Toolkit
      </Link>
      <ul className="flex items-center gap-x-5">
        <Link
          to="/"
          className="font-medium text-lg hover:text-blue-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          className="font-medium text-lg hover:text-blue-500 cursor-pointer"
        >
          Cart
        </Link>
      </ul>
      {cartItem.length > 0 && (
        <div className="text-2xl font-semibold">
          CartItem : {cartItem.length}
        </div>
      )}
    </div>
  );
}
