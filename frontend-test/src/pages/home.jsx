import React from "react";
import PageControl from "../components/pageControl";
import Hero from "./Hero";

const home = () => {
  return (
    <div>
      <PageControl />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default home;
