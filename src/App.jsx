import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Ourteam from "./pages/Ourteam";
import Project from "./pages/Project";
import Client from "./pages/Client";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Ourteam/>
      <Project/>
      <Client/>
      <Footer/>
    </>
  );
};

export default App;
