import React from "react";
import "../styles/Home.css";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

function Home() {
  return (
    <>
      <main>
        <Hero></Hero>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <About></About>
      </main>
    </>
  );
}

export default Home;
