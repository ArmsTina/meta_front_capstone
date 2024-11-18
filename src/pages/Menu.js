import React from "react";
import "../styles/Menu.css";
import Food1 from "../assets/greek salad.jpg";
import Food2 from "../assets/bruchetta.svg";
import Food3 from "../assets/lemon dessert.jpg";
import Food4 from "../assets/grilled fish.jpg";
import Food5 from "../assets/pasta.jpg";

function Menu() {
  return (
    <>
      <main id="menu">
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
        </section>

        <section>
          <img src={Food2} alt="Bruschetta" />
          <div className="title-price">
            <h3>Bruschetta</h3>
            <span className="price">$ 5.99</span>
          </div>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
        </section>

        <section>
          <img src={Food3} alt="Lemon Dessert" />
          <div className="title-price">
            <h3>Lemon Dessert</h3>
            <span className="price">$ 5.00</span>
          </div>
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </section>

        <section>
          <img src={Food4} alt="Grilled Fish" style={{ maxHeight: "25rem" }} />
          <div className="title-price">
            <h3>Grilled Fish</h3>
            <span className="price">$ 18.99</span>
          </div>
          <p>
            Freshly caught and expertly grilled, our fish is served with a side
            of lemon butter sauce and seasonal vegetables for a perfect balance
            of flavors.
          </p>
        </section>

        <section>
          <img src={Food5} alt="Penne Arrabbiata" />
          <div className="title-price">
            <h3>Penne Arrabbiata</h3>
            <span className="price">$ 15.50</span>
          </div>
          <p>
            A spicy Italian classic, our Penne Arrabbiata features al dente
            penne pasta tossed in a fiery tomato sauce made with fresh garlic,
            chili peppers, and olive oil, garnished with Parmesan and fresh
            parsley.
          </p>
        </section>
      </main>
    </>
  );
}

export default Menu;
