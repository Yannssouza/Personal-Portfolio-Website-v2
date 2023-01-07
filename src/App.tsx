import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "../font/inter.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Skills2 from "./Skills2";
import Projects from "./Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => setDarkMode(!darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-neutral-900 min-h-screen">
        <Nav changeMode={changeMode} />
        <Hero />
        <Skills2 />
        <Projects />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

