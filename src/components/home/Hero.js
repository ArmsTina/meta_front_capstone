import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
import Hero1 from "../../assets/restauranfood.jpg";

function Hero() {
  return (
    <>
      <article id="hero">
        <div className="hero-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <input type="button" value="Reserve a Table" />
          </Link>
        </div>
        <img src={Hero1} alt="Food" />
      </article>
    </>
  );
}

export default Hero;
