import React, { useState } from "react";

const Project = ({ name }) => {
  const [photos] = useState([
    {
      i: "1",
      projectName: "PawPals",
      desc: "A social platform for your pets to find companionship",
      deployedApp: "https://noemiegrau.github.io/pawpals/",
      githubRepo: "https://github.com/Noemiegrau/pawpals",
    },
    {
      i: "2",
      projectName: "Vault",
      desc: "A budgetting web application for the modern professional",
      deployedApp: "https://vault-ucla.herokuapp.com/",
      githubRepo: "https://github.com/latoyadawson/Vault",
    },
    {
      i: "3",
      projectName: "Coding Quiz",
      desc: "A simple quiz to test your frontend knowledge",
      deployedApp: "https://chelciedealmeida.github.io/web-api-ch4/",
      githubRepo: "https://github.com/ChelcieDeAlmeida/web-api-ch4",
    },
    {
      i: "4",
      projectName: "Taskmaster Pro",
      desc: "An app that helps users track their tasks",
      deployedApp: "https://chelciedealmeida.github.io/taskmaster-pro/",
      githubRepo: "https://github.com/ChelcieDeAlmeida/taskmaster-pro",
    },
    {
      i: "5",
      projectName: "Git It Done",
      desc: "An app that allows you to search for Github users, their repos, and their open issues",
      deployedApp: "https://chelciedealmeida.github.io/git-it-done/",
      githubRepo: "https://github.com/ChelcieDeAlmeida/git-it-done/",
    },
    {
      i: "6",
      projectName: "Run Buddy",
      desc: "An app that connects users to trainers to better plan their health journey",
      deployedApp: "https://chelciedealmeida.github.io/run-buddy/",
      githubRepo: "https://github.com/ChelcieDeAlmeida/run-buddy",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.name === name);

  return (
      <div id="projectGrp">

        {currentPhotos.map((image, i) => (
          <div className="projects">
            <img
              src={require(`./images/${image.i}.png`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            
            />
            <div>
              <div>
                <span>{image.projectName}</span>
              </div>
              <div>{image.desc}</div>
            
              <button>
                <a href={image.deployedApp}>Launch App</a>{" "}
              </button>
              <br />
              <button>
                <a href={image.githubRepo}>GitHub Repo</a>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>

  

        
  );
};

export default Project;
