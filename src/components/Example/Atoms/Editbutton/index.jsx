import React from "react";
import pencil from "../../../assets/svg/pencil.svg";

export const Img = () => {
  return <img src={pencil} />;
};
export const Editbutton = ({ onClick }) => {
  return <button onClick={onClick}></button>;
};
