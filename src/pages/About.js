import React from "react";
import Hero1 from "../assets/restauranfood.jpg";
import Map from "../components/Map";

function About() {
  return (
    <>
      <main>
        <article id="hero">
          <div className="hero-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Welcome to Little Lemon, a family-owned Mediterranean restaurant
              located in the heart of Chicago. At Little Lemon, we are
              passionate about bringing the rich flavors of the Mediterranean to
              your table, blending traditional recipes with a modern twist.
            </p>
          </div>
          <img src={Hero1} alt="Food" />
        </article>
        <article id="about">
          <div class="about-text">
            <h3>Contact Info</h3>
            <p>
              1 Hacker Way, Menlo Park, CA 94025, U.S.
              <br />
              (123) 456-7890
              <br />
              sample@gmail.com
            </p>
          </div>
          <div>
            <Map></Map>
          </div>
        </article>
      </main>
    </>
  );
}

export default About;
