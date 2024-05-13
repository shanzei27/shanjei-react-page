import "./global.css";
import React, { useEffect, useState } from "react";
import Element from "./components/Element";
import defaults from "./config/defaults";

const Timeline = ({ elements, elementWidth, customStyle, blockColors }) => {
  const elLength = elements.length;
  const currentBlockColors =
    blockColors !== undefined && blockColors.length != 0
      ? blockColors
      : defaults.defaultBlockColors;

  const  [blockColorArr, setBlockColorArr] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //generate block colors for each element
    let colorArr = [];
    let blockColorIndex = 0;
    console.log("called");
    while (colorArr.length < elLength) {
      if (blockColorIndex < currentBlockColors.length) {
        blockColorIndex += 1;
      } else {
        blockColorIndex = 0;
      }
      colorArr.push(currentBlockColors[blockColorIndex]);
    }
    setBlockColorArr(colorArr);
    console.log(blockColorArr);
  };

  return (
    <div
      className="main"
      style={{
        width: elLength * (elementWidth !== undefined ? elementWidth : 240),
      }}
    >
      <div className="innerContainer">
        {elements.map((el, index) => (
          <Element
            id={index}
            total={elLength}
            element={el}
            userStyle={customStyle}
            themeBaseColor={blockColorArr[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
