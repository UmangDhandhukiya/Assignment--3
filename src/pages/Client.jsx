import React from "react";

const Client = () => {
  const brand = [
    "/1brand.png",
    "/2brand.png",
    "/3brand.png",
    "/4brand.png",
    "/5brand.png",
    "/6brand.png",
    "/7brand.png",
    "/8brand.png",
    "/9brand.png",
  ];

  return (
    <div id="clients" className="clients">
      <div className="heading">
        <h1>OUR CLIENTS</h1>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="clients-container">
        {brand.map((value, index) => {
          return (
            <img src={value} alt="Brand logo" key={index}/>
          );
        })}
      </div>
      <img src="/decore9.svg" className="decore11" alt="" />
    </div>
  );
};

export default Client;
