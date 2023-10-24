import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Popular from "../components/popular/Popular.jsx";
import Offers from "../components/Offer/Offers.jsx";
import NewCollections from "../components/newCollection/NewCollections.jsx";
import NewsLatter from "../components/newsLater/NewsLatter.jsx";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLatter/>
    </div>
  );
};

export default Shop;
