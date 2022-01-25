import React from "react";

export default function CloudInfraImg(props) {
  const theme = props.theme;
  return (
    <img
      alt="saad sitting on table"
      src={require("../../assests/images/hci.svg")}
      theme={theme}
      // style={}
    ></img>
  );
}
