import "./App.css";
import React from "react";
// import Nav from "./components/Nav";
import Header from "./components/Header";
// import Project from "./components/Project";
import Footer from "./components/Footer";
// import About from "./components/About";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <div>
        <main>
        {/* <About></About> */}
        {/* <Resume></Resume> */}
        </main>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
