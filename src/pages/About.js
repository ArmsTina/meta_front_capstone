import React from "react";
import Hero1 from "../assets/restauranfood.jpg";
import Chef1 from "../assets/Mario and Adrian A.jpg";
import Chef2 from "../assets/Mario and Adrian b.jpg";

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
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum
              habitasse ornare primis viverra elementum iaculis iaculis. Etiam
              ultricies ac ridiculus posuere sollicitudin nec malesuada
              accumsan. Tellus blandit elit, ultrices metus odio habitant.
              Dictumst praesent himenaeos felis litora fringilla litora magna
              ultrices. Auctor natoque lorem litora cras; ornare parturient? Id
              dignissim nisl parturient fames mattis sapien hendrerit venenatis
              platea! Nam montes eros quam vehicula sit quisque platea nostra.
            </p>
            <br></br>
            <p>
              Mauris cursus accumsan molestie inceptos, nam sem vivamus.
              Eleifend molestie sed magna dignissim; id libero dapibus sagittis.
              Ac quam bibendum habitasse ex dictumst maecenas tristique est.
              Facilisi integer elementum volutpat gravida sapien ad. Laoreet
              enim bibendum fusce etiam dignissim purus rutrum? Luctus magnis a
              euismod mollis auctor dictum facilisi penatibus. Velit curae est
              nunc nascetur sagittis, laoreet vestibulum sit dapibus. Proin
              consequat habitant potenti ullamcorper ac. Quisque leo sodales
              turpis leo efficitur arcu phasellus mus inceptos.
            </p>
          </div>
          <div class="about-images">
            <img src={Chef1} alt="Chef Mario and Adrian A" />
            <img src={Chef2} alt="Chef Mario and Adrian B" />
          </div>
        </article>
      </main>
    </>
  );
}

export default About;
