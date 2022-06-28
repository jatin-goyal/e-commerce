import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Boat headphones </Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">10</span>
      </button>
    </div>
  );
};

export default NavBar;
