import React from "react";

export default function DataScienceImg(props) {
  const theme = props.theme;
  return (
    <img
      alt="saad sitting on table"
      src={require("../../assests/images/dataScience.svg")}
      theme={theme}
    ></img>
  );
}
