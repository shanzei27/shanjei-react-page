import "./timeline.css";
import React, { useEffect, useState } from "react";
import ElementStandard from "./components/ElementStandard";
import defaults from "./config/defaults";

//variant = if standard (with n number of sequential elements) or percentage (0-100% bar with elements relative to its assigned %), (default: standard)
//elements = elements provided as array of objects (required)
//elementWidth = width of the entire timeline (optional)
//customStyle = custom stylint - targets individual elements inside the timeline, not the entire timeline (optional)
//blockColors = colors for elements as array of hex code strings (optional)
const Timeline = ({
  variant,
  elements,
  overallWidth,
  customStyle,
  blockColors,
}) => {
  const elLength = elements.length;
  const currentBlockColors =
    blockColors !== undefined && blockColors.length != 0
      ? blockColors
      : defaults.defaultBlockColors;

  const [blockColorArr, setBlockColorArr] = useState([]);

  useEffect(() => {
    init();
  }, [elLength]);

  const init = () => {
    //generate block colors for each element
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

  return (
    <div
      className="main"
      style={{
        width: elLength * (overallWidth !== undefined ? overallWidth : 240),
      }}
    >
      {(variant === "standard" || variant === "") && (
        <div className="innerContainer">
          {elements.map((el, index) => (
            <ElementStandard
              id={index}
              total={elLength}
              element={el}
              userStyle={customStyle}
              themeBaseColor={blockColorArr[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
