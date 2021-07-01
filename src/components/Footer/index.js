import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="logo-list">
        <li>
          <a href="https://www.twitch.tv/createdbyxy">
          <img src={require("../../assets/images/twitch.png").default} alt="twitchLogo" className="logo"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chelciedealmeida/">
          <img src={require("../../assets/images/LI-In-Bug.png").default} alt="linkedinLogo" className="logo"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/ChelcieDeAlmeida">
              <img src={require("../../assets/images/GitHub-Mark-32px.png").default} alt="githubLogo" className="logo"/>
              </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
