import React from "react";

const Footer = () => {
  return (
    <div className="flex  flex-col  p-2 text-center ">
      <div className="text-sm mb-2"> Made with ❤️️ by me.</div>
      <div className="text-sm">
        <a href="mailto:hello@mwankhede.dev">
          Got a question?{" "}
          <span className="underline text-blue-500 cursor-pointer">
            hello@mwankhede.dev
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
