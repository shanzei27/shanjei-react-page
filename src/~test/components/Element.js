import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import "../global.css";
import React from "react";

//id = id based on index,
//total = total number of elements to render
//element = current element data

const Element = ({ id, total, element, userStyle }) => {
  const direction = id % 2 === 0 ? "up" : "down"; //direction = element pointing direction
  const elementBaseStyle = {
    // applying corner borders if element is on edges
    borderTopLeftRadius: id === 0 ? "20px" : "0px",
    borderBottomLeftRadius: id === 0 ? "20px" : "0px",
    borderTopRightRadius: id === total - 1 ? "20px" : "0px",
    borderBottomRightRadius: id === total - 1 ? "20px" : "0px",
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
          top: id % 2 === 0 ? "-115px" : "auto",
          bottom: id % 2 !== 0 ? "-115px" : "auto",
        }}
      >
        <div
          className="element-circle"
          style={{
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
