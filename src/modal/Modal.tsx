import React from "react";
import "./Modal.css";
import { Screen1 } from "./screens/Screen1";
import { Screen2 } from "./screens/Screen2";

enum Screens {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
}

export const Modal = ({ setIsOpen }) => {
  const [screen, setScreen] = React.useState(Screens.Screen1);

  // Key of the animation
  // https://stackoverflow.com/a/63194757
  const key = () => {
    return Math.random();
  };

  const animationClassName = () => {
    return screen == Screens.Screen1 ? "scale-up-ver" : "scale-down-ver";
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered " style={{ border: "1px solid green" }}>
        <div className={"modal " + animationClassName()} key={key()}>
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modalContent ">
            {screen === Screens.Screen1 && <Screen1 />}
            {screen === Screens.Screen2 && <Screen2 />}
          </div>
          <button onClick={() => setScreen(Screens.Screen1)}>Screen1</button>
          <button onClick={() => setScreen(Screens.Screen2)}>Screen2</button>
        </div>
      </div>
    </>
  );
};
