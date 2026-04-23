import React, { useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartContext";

function MealCart({ menu }) {
  const { addItem } = useContext(CartContext);
  return (
    <div className="">
      <div className="">
        <img className="rounded-t-3xl" src={menu.img} alt="No image found" />
      </div>
      <div className="p-5 bg-slate-200">
        <p className="font-semibold text-xl">{menu.name}</p>
        <p className="text-xs">{menu.dsc}</p>
        <div className="flex justify-between items-center">
          <p className="text-yellow-800 font-semibold">Price ${menu.price}</p>
          <button onClick={addItem("Hello world data")}>
            <MdOutlineAddShoppingCart className="text-2xl hover:text-red-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealCart;
