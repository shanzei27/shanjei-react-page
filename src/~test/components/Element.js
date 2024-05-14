import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import "../timeline.css";
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
        class="triangle"
        style={{
          borderBottomColor: themeBaseColor,
          top: id % 2 === 0 ? "35px" : "auto",
          bottom: id % 2 !== 0 ? "35px" : "auto",
          transform: id % 2 === 0 ? "rotate(180deg)" : "",
        }}
      ></div>
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
            top: id % 2 !== 0 ? "58px" : "auto",
          }}
        >
          {element.circle_text}
        </div>
      </div>
      <div
        className="element-desc-container"
        style={{
          top: id % 2 !== 0 ? "-105px" : "auto",
          bottom: id % 2 === 0 ? "-105px" : "auto",
        }}
      >
        <h2 className="element-heading">{element.name}</h2>
        <p className="element-desc"> {element.desc}</p>
      </div>
      {element.name}
    </div>
  );
};

export default Element;
