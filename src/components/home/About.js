import React from 'react';
import '../../styles/About.css';
import Chef1 from '../../assets/Mario and Adrian A.jpg';
import Chef2 from '../../assets/Mario and Adrian b.jpg';

function About() {
  return (
    <>
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
    </>
  );
}

export default About;
