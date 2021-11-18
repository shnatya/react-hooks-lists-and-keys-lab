import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log("this is array:" + technologies)
  console.log(technologies[0], technologies[1]) //{el}?
  const techList = technologies.map(el => <span key = {el}>{el}</span>) //el key? but they repeat 
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
