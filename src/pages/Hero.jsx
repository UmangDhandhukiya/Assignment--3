import React from "react";

/**
 * Renders the main Hero section (first visible area) of the landing page.
 * Parameters: None.
 * This component features a two-part layout with a main heading, introductory text, and decorative background images.
 */
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-part">

      </div>
      <div className="right-part">
        <h1>Mendleson<br/> Communication<br/> and Engagement</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </p>
      </div>
      <img className="decore3" src="/decore3.svg" alt=""/>
      <img className="decore4" src="/vector.png" alt=""/>
    </div>
  );
};

export default Hero;
