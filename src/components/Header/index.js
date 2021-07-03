import React from "react";
import Nav from '../Nav';



function Header(props) {

    const { navSelected, setNavSelected } = props;
    return(
        <header>
 
            <h1>CHELCIE DE ALMEIDA</h1>
            <Nav navSelected={navSelected} setNavSelected={setNavSelected}></Nav>

        </header>
    )

}




export default Header;