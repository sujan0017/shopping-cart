import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <ul className="bg-yellow-500 flex justify-center items-center gap-5 p-5">
      <Link
        to={"/"}
        className="bg-amber-900 px-5 py-2 rounded-full text-white hover:bg-amber-950 cursor-pointer"
      >
        Menu
      </Link>
      <Link
        to={"/cart"}
        className="bg-amber-900 px-5 py-2 rounded-full text-white hover:bg-amber-950 cursor-pointer"
      >
        Cart
      </Link>
    </ul>
  );
}

export default Navbar;
