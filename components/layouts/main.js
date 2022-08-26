import React from "react";
import Skills from "../cards/skills";
import Experience from "../cards/experience";
import Introduction from "../cards/introduction";
import Projects from "../cards/projects";
import Footer from "./footer";
import Header from "./header";
import { useSelector } from "react-redux";
import Head from "next/head";

const Main = (props) => {
  const cardName = useSelector((state) => state.card.name);
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <Head>
        <title>
          {cardName
            ? `${capitalize(cardName)} - Mayuresh Wankhede`
            : `Mayuresh Wankhede`}
        </title>
      </Head>
      <div>
        <div className="bbg-noise"></div>
        <div className="p-2 py-10">
          <div className="md:w-1/3 w-full m-auto p-2  rounded-xl overflow-hidden">
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
    </>
  );
};

export default Main;
