import React from "react";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Work from "../Work/Work";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";

export default function MasterLayout() {
  return (
    <>
      <Home/>
      <Work/>
      <About />
      <Recipes/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </>
  );
}
