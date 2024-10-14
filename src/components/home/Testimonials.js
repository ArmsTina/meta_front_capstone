import React from 'react';
import '../../styles/Testimonials.css';
import Reviewer1 from '../../assets/reviewer1.jpg';
import Reviewer2 from '../../assets/reviewer2.jpg';
import Reviewer3 from '../../assets/reviewer3.jpg';
import Reviewer4 from '../../assets/reviewer4.jpg';

function Testimonials() {
  return (
    <>
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
    </>
  );
}

export default Testimonials;
