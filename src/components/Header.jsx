import React from "react";
import { RiArrowDropLeftLine,RiArrowDropRightLine } from "react-icons/ri";
import "../style/header.css";


const iconStyle = {
  width: 80,
  height: 80,
}
export default function Header ({handlePrevMonth, handleNextMonth, currentMonth}) {

  return (
    <header>
      <button className="left__button" onClick={handlePrevMonth}>
        <RiArrowDropLeftLine style={iconStyle}/>
      </button>
      <h1>{`${currentMonth.monthShort} ${currentMonth.year}`}</h1>
      <button className="right__button" onClick={handleNextMonth}>
        <RiArrowDropRightLine style={iconStyle}/>
      </button>
    </header>
  )
}