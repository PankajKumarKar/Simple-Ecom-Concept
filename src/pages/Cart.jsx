import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/slices/CartSlice";

export default function Cart() {
  const cartItem = useSelector((state) => state.cart);

  const total = cartItem.map((item) => item.price * item.quantity);
  const totalPrice = total.reduce((prev, curr) => prev + curr, 0);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center">
      {cartItem.length === 0 ? (
        <div>Cart iS eMpty</div>
      ) : (
        cartItem.map((item) => (
          <div
            key={item.id}
            className="flex  border p-6 h-20 items-center justify-between mt-4 w-[80%] rounded-lg"
          >
            <h1>{item.title}</h1>
            <p className="text-lg font-bold">Quantity:{item.quantity}</p>
            <button
              className="p-2 rounded-2xl bg-gray-500 hover:bg-gray-700 text-white font-semibold"
              onClick={() => dispatch(removeCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cartItem.length > 0 && (
        <div className="font-bold text-blue-500 mt-10 p-4 border">
          Total Price : {totalPrice.toFixed(2)}Rs.
        </div>
      )}
    </div>
  );
}
