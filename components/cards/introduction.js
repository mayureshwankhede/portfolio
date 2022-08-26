import React from "react";
import { useSelector } from "react-redux";
import { RoughNotation } from "react-rough-notation";
const Introduction = () => {
  const cardName = useSelector((state) => state.card.name);

  return (
    <div
      className={`introduction    flex flex-col justify-center items-center p-2 pt-16 -order-2 ${
        cardName == "home" ? "block" : "hidden"
      }`}
    >
      <div className="order-2 text-center">
        <h1
          className={`mt-4 font-bold text-4xl tracking-tight mb-1 text-gray-900 playfair `}
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
      <div className="flex-grow order-1">
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
