import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "Scroll",
        borderTop: "5px solid black",
        height: "450px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
