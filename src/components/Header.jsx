import React from "react";
import { RiArrowDropLeftLine,RiArrowDropRightLine } from "react-icons/ri";
import "../style/header.css";


const iconStyle = {
  width: 80,
  height: 80,
}
export default function Header () {

  return (
    <header>
      <button className="left__button">
        <RiArrowDropLeftLine style={iconStyle}/>
      </button>
      <h1>Mar 2023</h1>
      <button className="right__button">
        <RiArrowDropRightLine style={iconStyle}/>
      </button>
    </header>
  )
}