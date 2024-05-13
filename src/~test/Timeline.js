import "./global.css";
import React from "react";
import Element from "./components/Element";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Timeline = ({ elements, elementWidth, customStyle }) => {
  const elLength = elements.length;

  return (
    <div
      className="main"
      style={{
        width: elLength * (elementWidth !== undefined ? elementWidth : 240),
      }}
    >
      <div className="innerContainer">
      
      {elements.map((el, index) => (
          <Element id={index} total={elLength} element={el} userStyle={customStyle}/>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
