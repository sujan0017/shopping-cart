import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Cart() {
  return (
    <div className="flex items-center justify-between">
      <img
        className="size-14 rounded-full"
        src="https://i.pinimg.com/webp/1200x/0b/69/a4/0b69a45026a39c0380075b53497daa81.webp"
      />
      <div>
        <h3>Burger</h3>
        <p className="text-xs">Burgers type</p>
      </div>
      <div className="flex items-center gap-3">
        <button className=" p-2 border rounded-full bg-gray-200">−</button>
        <span>2</span>
        <button className=" p-2 border rounded-full bg-gray-200">+</button>
      </div>
      <p className="text-xl text-red-400">$17.98</p>
      <button>
        <MdDeleteForever />
      </button>
    </div>
  );
}

export default Cart;
