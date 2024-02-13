import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Myprojects from "./components/myprojects/Myprojects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { Toggle } from "./components/Toggle";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <>
      <div className="App" data-theme={isDark? "dark" : "light"}>
        {/* <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} /> */}
      </div>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Myprojects />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
