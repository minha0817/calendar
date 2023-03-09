import React from "react";
import { RiArrowDropLeftLine,RiArrowDropRightLine } from "react-icons/ri";

export default function Header () {
  return (
    <header>
      <button>
        <RiArrowDropLeftLine />
      </button>
      <h1>March, 2023</h1>
      <button>
        <RiArrowDropRightLine />
      </button>
    </header>
  )
}