import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "../font/inter.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import languageStrings from "./languages";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => setDarkMode(!darkMode);
  const languages: object = languageStrings;
  const [language, setLanguage]: [any, any] = useState();
  const changeLanguage = () => {
    setLanguage(false);
  };
  const changeLanguageEN = () => {
    setLanguage(true);
  };


  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-neutral-900 min-h-screen">
        <Nav  darkMode={darkMode} changeMode={changeMode} language={language} changeLanguage={changeLanguage}
             changeLanguageEN={changeLanguageEN} />
        <Hero language={language} languages={languages} />
        <Skills language={language} languages={languages}/>
        <Projects language={language} languages={languages}/>
        <Footer />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

