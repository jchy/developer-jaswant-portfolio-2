import React from "react";

const ProjectCard = ({ value }) => {
  const {
    title,
    description,
    project_url,
    repo_url,
    image,
    techStack,
    gitLogo,
    linkLogo
  } = value;
  return (
    <div style={{border: '1px solid gray',width: '400px', borderRadius: '2px'}}>
      <img src={image} alt="img" height="230px" width="398px"/>
      <p style={{fontSize: '24px', fontWeight: 'bold', padding:"0px 20px"}}>{title}</p>
      <p style={{padding:"0px 20px"}}>{description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between',padding:"0px 20px 20px 20px"}}>
        <div>
          <a href={project_url} target="_blank" rel="noopener noreferrer"> <img src={linkLogo} alt="" height="15px"/> View Project</a>
        </div>
        <div>
         <a href={repo_url} target="_blank" rel="noopener noreferrer"> <img src={gitLogo} alt="" height="26px"/> View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
