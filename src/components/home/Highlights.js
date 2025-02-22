import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Highlights.css";
import Food1 from "../../assets/greek salad.jpg";
import Food2 from "../../assets/bruchetta.svg";
import Food3 from "../../assets/lemon dessert.jpg";
import Delivery from "../../assets/Dish icon.svg";

function Highlights() {
  return (
    <>
      <article id="highlights">
        <div className="highlights-header">
          <h2>Specials</h2>
          <Link to="/menu">
            <input type="button" value="All Menus" />
          </Link>
        </div>
        <div className="cards">
          <section>
            <img src={Food1} alt="Greek salad" />
            <div className="title-price">
              <h3>Greek salad</h3>
              <span className="price">$ 12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <Link to="/order">
              <span className="order">
                Order a delivery <img src={Delivery} alt="Delivery Icon" />
              </span>
            </Link>
          </section>

          <section>
            <img src={Food2} alt="Bruschetta" />
            <div className="title-price">
              <h3>Bruschetta</h3>
              <span className="price">$ 5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <Link to="/order">
              <span className="order">
                Order a delivery <img src={Delivery} alt="Delivery Icon" />
              </span>
            </Link>
          </section>

          <section>
            <img src={Food3} alt="Lemon Dessert" />
            <div className="title-price">
              <h3>Lemon Dessert</h3>
              <span className="price">$ 5.00</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <Link to="/order">
              <span className="order">
                Order a delivery <img src={Delivery} alt="Delivery Icon" />
              </span>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}

export default Highlights;
