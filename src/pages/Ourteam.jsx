import React from "react";

const Ourteam = () => {
  return (
    <div id="team" className="ourteam">
      <div className="heading">
        <h1>OUR TEAM</h1>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="Team-details">
        <div className="person">
          <img src="/Person1.png" alt="" />
          <h5>Jessica D’suza</h5>
        </div>
        <div className="person">
          <img src="/Person2.png" alt="" />
          <h5>Johny Williams</h5>
        </div>
        <div className="person">
          <img src="/Person3.png" alt="" />
          <h5>Sanya R.</h5>
        </div>
      </div>
       <img src="/decore5.svg" className="decore9" alt="" />  
    </div>
  );
};

export default Ourteam;
