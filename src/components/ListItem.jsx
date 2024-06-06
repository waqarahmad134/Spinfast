import React from "react";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  return (
    <li
      className={`py-2.5 px-8 text-themeGray font-semibold border-b ${
        props.active ? "bg-theme text-white" : "bg-transparent"
      } hover:bg-theme hover:text-white 
      duration-200`}
    >
      <Link to={props.to}>{props.title}</Link>
    </li>
  );
}
