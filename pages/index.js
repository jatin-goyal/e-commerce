import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of various types</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
