import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import MealCart from "../components/MealCart";
import Loading from "../components/Loading";

function Menu() {
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://free-food-menus-api-two.vercel.app/burgers")
      .then((res) => res.json())
      .then((data) => {
        setCartList(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-5 sm:p-10">
      {cartList.map((menu) => (
        <MealCart key={menu.id} menu={menu} />
      ))}
    </div>
  );
}

export default Menu;
