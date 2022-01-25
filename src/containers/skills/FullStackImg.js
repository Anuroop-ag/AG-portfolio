import React from "react";

export default function FullStackImg(props) {
  const theme = props.theme;
  return (
    <img
      alt="saad sitting on table"
      src={require("../../assests/images/dev.svg")}
      theme={theme}
    ></img>
  );
}
