import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const API = "https://api.github.com/graphql";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  var [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      console.log(repoList);
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);
  projectsArray = [
    {
      title : "teachable.com Clone",
      description:"This is a team project of three members, creating a web app which have same facilities and features as of https://teachable.com.",
      project_url:"https://teachableproject.netlify.app/",
      repo_url:"https://github.com/jchy/teachable.com-project",
      image:require('../../assets/img/teachable.jpeg'),
      gitLogo:require('../../assets/img/gitLogo.png'),
      linkLogo:require('../../assets/img/linkLogo.png')
    },
    {
      title : "OYO Clone",
      description:"OYO Rooms, also known as OYO Hotels & Homes, is an Indian multinational OTA, homes and living spaces.",
      project_url:"https://zealous-shirley-afc987.netlify.app/",
      repo_url:"https://github.com/jchy/OYO-Clone",
      image:require('../../assets/img/oyo.jpeg'),
      gitLogo:require('../../assets/img/gitLogo.png'),
      linkLogo:require('../../assets/img/linkLogo.png')
    },
    {
      title : "BookMyShowProject",
      description:"bookmyshow.com is an all in one show ticket booking site, Where you can search for shows, movies, comedies in any city across India",
      project_url:"https://anishtiwari09.github.io/bookmyshowclones/HTML/Home.html",
      repo_url:"https://github.com/jchy/BookMyShowProject",
      image:require('../../assets/img/bookmyshow.jpeg'),
      gitLogo:require('../../assets/img/gitLogo.png'),
      linkLogo:require('../../assets/img/linkLogo.png')
    },
  ];
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="col-sm-12 col-md-12 col-lg-12">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:"center", gap:"2rem"}}>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
