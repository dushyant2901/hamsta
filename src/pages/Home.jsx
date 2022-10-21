import React from "react";
import Banner from "../components/Banner/Banner";
import Section from "../layout/Section";

const Home = () => {
  return (
    <div>
      <Banner />
      <Section title="Top Products" data={[1, 2, 23, 3, 4, 56, 77, 8]} />
      <Section title="Featured Products" data={[901, 2, 23, 3, 4, 56, 77, 8]} />
    </div>
  );
};

export default Home;
