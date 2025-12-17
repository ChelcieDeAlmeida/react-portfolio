import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [navSelected, setNavSelected] = useState("about");

  const selectNav = () => {
    switch (navSelected) {
            case "about-me":
              return <About />;
            case "portfolio":
              return <Portfolio />;
            case "contact":
              return <Contact />;
            case "resume":
              return <Resume />;
            default: 
              return <About />;
    }
  };
  return (
    <div className="App">
      <Header navSelected={navSelected} setNavSelected={setNavSelected}></Header>
      
      <div>
        <main>
        {selectNav()}
        </main>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
