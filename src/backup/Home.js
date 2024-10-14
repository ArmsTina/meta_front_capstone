import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Hero from '../assets/restauranfood.jpg'
import Food1 from '../assets/greek salad.jpg'
import Food2 from '../assets/bruchetta.svg'
import Food3 from '../assets/lemon dessert.jpg'
import Delivery from '../assets/Dish icon.svg'
import Reviewer1 from '../assets/reviewer1.jpg'
import Reviewer2 from '../assets/reviewer2.jpg'
import Reviewer3 from '../assets/reviewer3.jpg'
import Reviewer4 from '../assets/reviewer4.jpg'
import Chef1 from '../assets/Mario and Adrian A.jpg'
import Chef2 from '../assets/Mario and Adrian b.jpg'

function Home() {
  return (
    <>
      <main>
        <article id="hero">
          <div className="hero-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <input type="button" value="Reserve a Table" />
          </div>
          <img src={Hero} alt="Food" />
        </article>
        <article id="highlights">
          <div className="highlights-header">
            <h2>Specials</h2>
            <input type="button" value="Order Now" />
          </div>
          <div className="cards">
            <section>
              <img src={Food1} alt="Greek salad" />
              <div className="title-price">
                <h3>Greek salad</h3>
                <span className="price">$ 12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <Link to="/order"><span className="order">Order a delivery <img src={Delivery} alt="Delivery Icon" /></span></Link>
            </section>

            <section>
              <img src={Food2} alt="Bruschetta" />
              <div className="title-price">
                <h3>Bruschetta</h3>
                <span className="price">$ 5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <Link to="/order"><span className="order">Order a delivery <img src={Delivery} alt="Delivery Icon" /></span></Link>
            </section>

            <section>
              <img src={Food3} alt="Lemon Dessert" />
              <div className="title-price">
                <h3>Lemon Dessert</h3>
                <span className="price">$ 5.00</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <Link to="/order"><span className="order">Order a delivery <img src={Delivery} alt="Delivery Icon" /></span></Link>
            </section>
          </div>
        </article>
        <article id="testimonials">
          <h2>Testimonials</h2>
          <div className="cards">
            <section>
              <p>Rating <span className="star">★★★★★</span></p>
              <div className="profile">
                <img src={Reviewer1} alt="Reviewer"></img>
                <span>Emily Johnson</span>
              </div>
              <p className="review">
                The food was absolutely fantastic! The flavors were rich and authentic, and the presentation was beautiful. I can’t wait to come back!
              </p>
            </section>

            <section>
              <p>Rating <span className="star">★★★★★</span></p>
              <div className="profile">
                <img src={Reviewer2} alt="Reviewer"></img>
                <span>James Miller</span>
              </div>
              <p className="review">
                A wonderful dining experience! The atmosphere is cozy, the staff is friendly, and the dishes are truly delightful. Highly recommend this place!
              </p>
            </section>

            <section>
              <p>Rating <span className="star">★★★★★</span></p>
              <div className="profile">
                <img src={Reviewer3} alt="Reviewer"></img>
                <span>Sarah Collins</span>
              </div>
              <p className="review">
                This restaurant exceeded my expectations! The Mediterranean flavors are spot on, and everything was cooked to perfection. Five stars from me!
              </p>
            </section>

            <section>
              <p>Rating <span className="star">★★★★★</span></p>
              <div className="profile">
                <img src={Reviewer4} alt="Reviewer"></img>
                <span>Olivia Martinez</span>
              </div>
              <p className="review">
                Absolutely loved it here! The dishes were fresh, flavorful, and the perfect balance of spices. I’ll definitely be telling my friends about this place!
              </p>
            </section>
          </div>
        </article>
        <article id="about">
          <div class="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div class="about-images">
            <img src={Chef1} alt="Chef Mario and Adrian A" />
            <img src={Chef2} alt="Chef Mario and Adrian B" />
          </div>
        </article>
      </main>
    </>
  )
}

export default Home