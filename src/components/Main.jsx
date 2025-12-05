import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";

function Main() {
  return (
    <div className="bg-[#2a2a2a] text-white xlg:h-screen lg:h-full">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default Main;
