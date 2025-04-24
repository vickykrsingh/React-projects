import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartMethod } from "../redux/cartSlice";

function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartMethod({ type: "total" }));
  }, [product]);

  console.log(product.total);

  return (
    <section className="text-amber-50 rounded-md bg-[#242424] w-full min-h-[92vh] px-4 md:px-8 lg:px-20 py-4 flex flex-col gap-2 justify-between">
      <section className="flex gap-2 flex-col overflow-scroll h-[80vh]">
        {product.products.length > 0 ? (
          product.products.map((p) => (
            <div
              key={p.id}
              className="bg-grey-200 text-gray-200 flex justify-between bg-gray-600 px-4 py-2"
            >
              <img
                className="w-32 h-32 rounded-md object-cover border-2 order-2"
                src={p.images[0] || p.thumbnail}
                alt={product.title}
              />
              <div className="order-1">
                <div>{p.title}</div>
                <div>{p.description.substring(0, 20)}...</div>
                <div>Price : {p.price}</div>
                <div>Brand : {p.brand}</div>
                <div>Quantity : {p.quantity}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-amber-50">Cart is Empty</div>
        )}
      </section>
      <section className="w-full text-lg font-semibold tracking-widest pb-4 h-[12vh] text-gray-200 flex flex-col items-center">
        <section className="w-full flex justify-end">
          <p>Total Price Value : RS {product.total.toFixed(2)}</p>
        </section>
        <section className="flex w-full justify-end font-normal text-base">
          <button
            className="bg-gray-700 px-4 py-2
          rounded-md cursor-pointer hover:bg-gray-800 border-2 border-gray-200 duration-200 disabled:opacity-35 disabled:cursor-not-allowed"
          disabled={product.total<=0}
          >
            Procced to Checkout
          </button>
        </section>
      </section>
    </section>
  );
}

export default Cart;
