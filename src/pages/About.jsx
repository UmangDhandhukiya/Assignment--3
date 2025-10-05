import React from "react";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="heading">
        <h1>ABOUT US</h1>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="full">
        <div className="left-part">
          <img src="/about.svg" alt="" />
        </div>
        <div className="right-part">
          <p>
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creativity, results and
            excepKonal levels of customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>
          <div className="right-inner">
            <div className="engage">
              <img src="/engage.svg" alt="" />
              <h3>ENGAGEMENT</h3>
              <p>
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum.
              </p>
            </div>
            <div className="engage">
              <img src="/communication.svg" alt="" />
              <h3>COMMUNICATION</h3>
              <p>
                We are award-winning leaders in communications and campaign
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
