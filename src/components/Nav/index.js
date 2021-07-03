import React from "react";



function Nav(props) {

    const { navSelected, setNavSelected } = props;

    return(
        <nav>
         <ul>
           <li className={navSelected === "about-me" && 'navActive'}>
              <a href="#about-me" onClick={() => setNavSelected("about-me")}>ABOUT ME</a> 
           </li>
           <li className={navSelected === "portfolio" && 'navActive'}>
              <a href="#portfolio" onClick={() => setNavSelected("portfolio")}>PORTFOLIO</a>
           </li>  
           <li className={navSelected === "contact" && 'navActive'}>
              <a href="#contact" onClick={() => setNavSelected("contact")}>CONTACT</a>
           </li>
           <li className={navSelected === "resume" && 'navActive'}>
              <a href="#resume" onClick={() => setNavSelected("resume")}>RESUME</a> 
           </li>
         </ul>   
        </nav>
    )

}




export default Nav;