import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import "../global.css";
import React from "react";

//id = id based on index,
//total = total number of elements to render
//element = current element data
//userStyle = css overide from component init (user provided)
//themeBaseColor = base hex color code for this element
const Element = ({ id, total, element, userStyle, themeBaseColor }) => {
  const direction = id % 2 === 0 ? "up" : "down"; //direction = element pointing direction
  const elementBaseStyle = {
    // applying corner borders if element is on edges
    borderTopLeftRadius: id === 0 ? "20px" : "0px",
    borderBottomLeftRadius: id === 0 ? "20px" : "0px",
    borderTopRightRadius: id === total - 1 ? "20px" : "0px",
    borderBottomRightRadius: id === total - 1 ? "20px" : "0px",
    backgroundColor: themeBaseColor,
  };
  return (
    <div
      className="element"
      style={{
        ...elementBaseStyle,
        ...userStyle,
      }}
    >
      <div
        class="element-line"
        style={{
          backgroundColor: themeBaseColor,
          top: id % 2 === 0 ? "-115px" : "auto",
          bottom: id % 2 !== 0 ? "-115px" : "auto",
        }}
      >
        <div
          className="element-circle"
          style={{
            borderColor: themeBaseColor,
            color: themeBaseColor,
            top: id % 2 !== 0 ? "65px" : "auto",
          }}
        >
          {element.name}
        </div>
      </div>
      {element.name}
    </div>
  );
};

export default Element;
