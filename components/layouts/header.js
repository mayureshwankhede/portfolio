import { useState } from "react";
import { Switch } from "@headlessui/react";
import { RoughNotation } from "react-rough-notation";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/card";

const Link = (props) => {
  const { title, id } = props;

  const [onHoverLink, setOnHoverLink] = useState({
    name: null,
  });

  const cardName = useSelector((state) => state.card.name);
  const dispatch = useDispatch();

  console.log(onHoverLink.name, cardName);

  return (
    <div
      className={`px-2 cursor-pointer ${onHoverLink.id ? "font-bold" : ""}`}
      onClick={() => dispatch(changeName(id))}
    >
      <RoughNotation
        type="underline"
        show={id == onHoverLink.name && id != cardName ? true : false}
        color="#ffff00"
        onMouseOver={() => setOnHoverLink({ ...onHoverLink, name: id })}
        onMouseOut={() => setOnHoverLink({ ...onHoverLink, name: null })}
        strokeWidth={2}
      >
        <RoughNotation
          type="circle"
          show={id == cardName ? true : false}
          color="#ff3b00"
          strokeWidth={2}
        >
          {title}
        </RoughNotation>
      </RoughNotation>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header flex justify-between">
      <div className=" navbar flex">
        <Link title="Home" id="home" />
        <Link title="Projects" id="projects" />
        <Link title="Experience" id="experience" />
        <Link title="Skills" id="skills" />
      </div>
      <div className="px-2">
        <NightMode />
      </div>
    </div>
  );
};

const NightMode = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="mode">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-gray-800" : "bg-light"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`transform transition ease-in-out duration-200 ${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
    </div>
  );
};

export default Header;
