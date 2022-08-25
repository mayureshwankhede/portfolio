import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between p-2 ">
      <div className="pr-2 text-sm"> Made with ❤️️ by me.</div>
      <div className="pl-2 text-sm">
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
