import React from "react";
import FeatureProducts from "./HomePageSub/FeatureProducts";
import Header from "./HomePageSub/Header";
import Services from "./HomePageSub/Services";
import Trusted from "./HomePageSub/Trusted";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  );
};

export default HomePage;
