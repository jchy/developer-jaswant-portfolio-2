// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jaswant",
  middleName: "",
  lastName: "Chaudhary",
  // message: " Passionate about changing the world with technology. ",
  message: " A passionate, innovative, task-driven professional with specialization in MERN stack. Looking for an opportunity to make impact on the company's growth as well as personal growth by contributing technical and interpersonal skills. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jchy",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jaswantchaudhary/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/recjaswantcse",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilePic.jpeg"),
  imageSize: 370,
  message:
    "I'm a Full Stack Web Developer, pursuing my B.Tech in Computer Science & Engineering from Rajkiya Engineering College Sonbhadra, Uttar Pradesh. I'm a passionate, innovative, task-driven professional with specialization in MERN stack. I have done 1 year course on Full Stack Web Development at Masai School, Bangalore. Looking for an opportunity to make impact on the company's growth as well as personal growth by contributing technical and interpersonal skills.",
  resume: "https://drive.google.com/file/d/1u9SCXt04pIP3Yz1AwEM3jSnQCqXDNrwY/view?usp=sharing",
};

const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "jchy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profilePic.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profilePic.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 75 },
    { name: "Data Structures and Algorithms", value: 85 },
    { name: "JavaScript", value: 65 },
    { name: "React JS", value: 90 },
    { name: "Redux", value: 65 },
    { name: "MUI", value: 55 },
    { name: "Node.js", value: 80 },
    { name: "Express.js", value: 80 },
    { name: "MongoDB", value: 80 },
    { name: "Netlify", value: 80 },
    { name: "Heroku", value: 80 },
    { name: "Mondodb Atlas", value: 80 },
    { name: "AWS(Basic)", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Leadership", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "recjaswantcse@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
