import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h6>social</h6>
          <div className="item">
            <img src="/_fb.svg" alt="" />
            <a href="">Facebook</a>
          </div>
          <div className="item">
            <img src="/_linkedin.svg" alt="" />
            <a href="">Linkedin</a>
          </div>
          <div className="item">
            <div className="google">
              <img src="/_google.svg" alt="" />
            </div>
            <a href="">Google +</a>
          </div>
        </div>
        <div className="footer-content">
          <h6>Explore</h6>
          <div className="item">
            <a href="">Service</a>
          </div>
          <div className="item">
            <a href="">Team</a>
          </div>
          <div className="item">
            <a href="">Client</a>
          </div>
        </div>
        <div className="footer-content">
          <h6>Contact</h6>
          <div className="item">
            <p>
              Lorem Ipsum dummy address
              <br /> used for display
              <br /> 1234567890
            </p>
          </div>
        </div>
        <div className="footer-content">
          <h6>Email</h6>
          <div className="item">
            <p>mendlesoncommunication@email.com</p>
          </div>
        </div>
      </div>
      <div className="item">
        <p>© Copyright 2018 Mendleson Communication</p>
      </div>
    </div>
  );
};

export default Footer;
