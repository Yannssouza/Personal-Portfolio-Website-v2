import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "../font/inter.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Skills3 from "./Skills3";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => setDarkMode(!darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-neutral-900 min-h-screen">
        <Nav darkMode={darkMode} changeMode={changeMode} />
        <Hero />
        <Skills3 />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

