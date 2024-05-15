import "./timeline.css";
import React, { useEffect, useState, useRef } from "react";
import ElementStandard from "./components/ElementStandard";
import defaults from "./config/defaults";

//variant [string] = if standard (with n number of sequential elements) or percentage (0-100% bar with elements relative to its assigned %), (default: standard)
//elements [array] = elements provided as array of objects (required)
//elementWidth [number]  = width of the entire timeline (optional)
//customStyle [css style object]  = custom stylint - targets individual elements inside the timeline, not the entire timeline (optional)
//blockColors [array] = colors for elements as array of hex code strings (optional)
//animate [bool] = whether to show initial opacity animation or not (default: true)
const Timeline = ({
  variant,
  elements,
  overallWidth,
  customStyle,
  blockColors,
  animate = true,
}) => {
  const elLength = elements.length;
  const currentBlockColors =
    blockColors !== undefined && blockColors.length != 0
      ? blockColors
      : defaults.defaultBlockColors;
  const initialized = useRef(false);
  const [blockColorArr, setBlockColorArr] = useState([]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      init();
    }
  }, []);

  useEffect(() => {
    //generate block colors for each element
    assignElColors();
  }, [elLength]);

  const init = async () => {
    if (animate) {
      await startAnimation(500);
      stopAnimations();
    }
  };

  const assignElColors = () => {
    let colorArr = [];
    let blockColorIndex = 0;
    while (colorArr.length < elLength) {
      if (blockColorIndex < currentBlockColors.length - 1) {
        blockColorIndex += 1;
      } else {
        blockColorIndex = 0;
      }
      colorArr.push(currentBlockColors[blockColorIndex]);
    }
    setBlockColorArr(colorArr);
  };

  let requestIDs = [];

  const startAnimation = async (duration) => {
    for (let i = 0; i < elements.length; i++) {
      const innerCont = document.querySelector(`.elem${i}`);
      innerCont.style.opacity = 0;
    }
    console.log("i = " + elements.length);
    for (let i = 0; i < elements.length; i++) {
      const innerCont = document.querySelector(`.elem${i}`);

      let start = Date.now();
      function playAnimation() {
        const interval = Date.now() - start;
        innerCont.style.opacity = interval / duration;

        requestIDs.push(requestAnimationFrame(playAnimation));
      }
      requestIDs.push(requestAnimationFrame(playAnimation));
      await timer(300);
    }

    await timer(duration);
  };

  const stopAnimations = () => {
    while (requestIDs.length > 0) {
      window.cancelAnimationFrame(requestIDs[0]);
      requestIDs.shift();
    }
  };

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div
      className="main"
      style={{
        width: elLength * (overallWidth !== undefined ? overallWidth : 240),
      }}
    >
      {(variant === "standard" || variant === "") && (
        <>
          {elements.map((el, index) => (
            <span className={`elem${index}`}>
              <ElementStandard
                id={index}
                total={elLength}
                element={el}
                userStyle={customStyle}
                themeBaseColor={blockColorArr[index]}
              />
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Timeline;
