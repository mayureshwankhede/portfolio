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
          Over 90k+ students have enrolled and learned from{" "}
          <a
            href="https://www.udemy.com/course/learn-flutter-beginners-course/"
            className="text-blue-500 underline"
          >
            udemy course
          </a>
          .Back in the day I started playing with computers when I was 16
          years-old. Since then I have been tinkering with all sorts of
          technologies that in some way or another led me to work on Desktop &
          Web Application, Mobile & VR games.
        </p>
      </div>
      <div className="flex-grow order-1">
        <img
          src="/mayuresh_wankhede_2.jpg"
          alt=""
          srcSet=""
          className="w-40 h-40 rounded-full"
        />
      </div>
    </div>
  );
};

export default Introduction;
