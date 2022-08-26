import React from "react";
import { RoughNotation } from "react-rough-notation";
const Introduction = () => {
  return (
    <div className="introduction flex justify-between p-2 pt-16 -order-2">
      <div style={{ flex: "0 0 80%" }} className="pr-20">
        <h1
          className={`font-bold text-4xl tracking-tight mb-1 text-gray-900 roboto `}
        >
          Mayuresh Wankhede
        </h1>
        <div className="text-gray-600 text-sm mb-3 ">
          <div className="available-dot align-middle">
            <div className="circle"></div>
          </div>
          <span className="underline text-blue-600">available for hire</span>
        </div>
        <p className="text-gray-600 text-sm">
          Over 90k+ students have enrolled and learned from my udemy course.
          Teaching about web & App development, serverless, and React / Next.js.
        </p>
      </div>
      <div className="flex-grow">
        <img
          src="/mayuresh_wankhede.jpg"
          alt=""
          srcSet=""
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Introduction;
