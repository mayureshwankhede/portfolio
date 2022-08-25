import React from "react";

const Introduction = () => {
  return (
    <div className="introduction flex justify-between p-2 pt-16 -order-2">
      <div style={{ flex: "0 0 80%" }} className="pr-20">
        <h1
          className={`font-bold text-4xl tracking-tight mb-1 text-gray-900 roboto `}
        >
          Mayuresh Wankhede
        </h1>
        <p className="text-gray-600 text-sm mb-3">
          FullStack Developer at{" "}
          <span className="text-black font-bold">SimpleSplit Inc.</span>
        </p>
        <p className="text-gray-600 text-sm">
          Helping developers build a faster web. Teaching about web development,
          serverless, and React / Next.js.
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
