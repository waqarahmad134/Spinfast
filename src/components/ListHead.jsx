import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ListHead(props) {
  const location = useLocation().pathname;
  return (
    <li
      className={`px-6 py-3 md:px-10 lg:px-0 lg:py-0 ${
        location === props.to || props.active ? "text-theme" : "text-themeGray"
      }  font-medium xl:text-lg hover:text-theme duration-100`}
      onClick={props.onClick}
    >
      <Link className="flex items-center gap-1" to={props.to}>
        {props.title}
        <span>{props.icon}</span>
      </Link>
    </li>
  );
}
