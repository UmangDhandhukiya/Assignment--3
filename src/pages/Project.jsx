import React from "react";

const Project = () => {
  return (
    <div className="project">
      <div className="heading">
        <h1>OUR PROJECTS</h1>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="project-details">   
        <div className="project-left-part">
          <div className="project-card">
            <img src="/project1.jpg" alt="" />
            <h3 className="project-desc">Project 1 Building</h3>
          </div>
        </div>
        <div className="project-right-part">
          <div className="project-card">
            <img src="/project2.png" alt="" />
            <h3 className="project-desc">Project 2 Case Study</h3>
          </div>
          <div className="project-card">
            <img src="/project3.png" alt="" />
            <h3 className="project-desc">Project 3 Research</h3>
          </div>
        </div>
      </div>
      <img src="/decore8.svg" className="decore10" alt="" />
    </div>
  );
};

export default Project;
