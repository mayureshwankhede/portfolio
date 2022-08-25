import React from "react";
import Skills from "../cards/skills";
import Experience from "../cards/experience";
import Introduction from "../cards/introduction";
import Projects from "../cards/projects";
import Footer from "./footer";
import Header from "./header";
import { useSelector } from "react-redux";

const Main = (props) => {
  const cardName = useSelector((state) => state.card.name);

  return (
    <div>
      <div className="bbg-noise"></div>
      <div className="p-2 py-10">
        <div className="w-1/3  m-auto p-2  rounded-xl">
          <Header />
          <div className="flex flex-col">
            <Introduction />
            <Experience />
            <Projects />
            <Skills />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
